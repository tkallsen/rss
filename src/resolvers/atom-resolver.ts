export const resolveAtomField = (
  nodeName: string,
): [string, boolean, boolean, boolean] => {
  let isArrayNode = false;
  let isNumber = false;
  let isDate = false;
  let propertyName = nodeName;

  switch (nodeName) {
    case Field.Category:
      propertyName = "categories";
      isArrayNode = true;
      break;
    case Field.Contributer:
      propertyName = "contributers";
      isArrayNode = true;
      break;
    case Field.Link:
      propertyName = "links";
      isArrayNode = true;
      break;
    case Field.Entry:
      propertyName = "entries";
      isArrayNode = true;
      break;
    case Field.Updated:
    case Field.Published:
      propertyName = nodeName;
      isDate = true;
      break;
    default:
      propertyName = nodeName;
  }

  return [propertyName, isArrayNode, isNumber, isDate];
};

enum Field {
  Feed = "feed",
  Id = "id",
  Title = "title",
  Icon = "icon",
  Updated = "updated",
  Link = "link",
  Entry = "entry",
  Category = "category",
  Type = "type",
  Href = "href",
  Rel = "rel",
  Author = "author",
  Contributer = "contributer",
  Summary = "summary",
  Rights = "rights",
  Source = "source",
  Src = "src",
  Value = "value",
  Name = "name",
  Published = "published",
  Email = "email",
  Uri = "uri",
}
