const parseContactType = (ContactType) => {
const isString = typeof ContactType === 'string';
if (!isString) return;

const isContactType = (ContactType) => ["work", "home", "personal"].includes(ContactType);
if (isContactType(ContactType)) return ContactType;
};

const ParseFavourite = (isFavouriteType) => {
if (typeof isFavouriteType !== "string") return undefined;

if (isFavouriteType === "true") {
    return isFavouriteType;
}else if (isFavouriteType === "false"){
    return isFavouriteType;
}

return undefined;
};

export const parseFilterParams = (query) => {
const { type, isFavourite } = query;
const parsedContactType = parseContactType(type);
const parsedFavourite = ParseFavourite(isFavourite);

return {
    type: parsedContactType,
    isFavourite: parsedFavourite,
    };
};  