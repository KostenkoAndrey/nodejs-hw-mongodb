import { ContactsCollection } from '../db/models/contacts.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from "../constants/index.js";

export const getAllContacts = async ({
  page,
  perPage,
  sortOrder = SORT_ORDER.ASC,
  sortBy = '_id',  
  filter = {},
  userId,
}) => {

const limit = perPage;
const skip = (page - 1) * perPage;

const contactsQuery = ContactsCollection.find({ userId });

if (filter.type) {
  contactsQuery.where('contactType').equals(filter.type);
}
if (filter.isFavourite) {
  contactsQuery.where('isFavourite').equals(filter.isFavourite);
}

const contactsCount = await ContactsCollection.find().merge(contactsQuery).countDocuments();

const contacts = await contactsQuery.skip(skip).limit(limit).sort({ [sortBy]: sortOrder }).exec();

const paginationData = calculatePaginationData(contactsCount, perPage, page);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactsById = async (contactId, userId) => {
  const contact = await ContactsCollection.findOne( { _id: contactId, userId: userId } );
  return contact;
};

export const createContact = async (payload, id) => {
  const contact = await ContactsCollection.create({ ...payload, userId: id });
  return contact;
};

export const deleteContact = async (contactId, userId) => {
  const contact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
    userId: userId,
  });

  return contact;
};

export const updateContact = async (filter, payload, options = {}) => {
const rawResult = await ContactsCollection.findOneAndUpdate(filter, payload, { new: true, includeResultMetadata: true, ...options });

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
