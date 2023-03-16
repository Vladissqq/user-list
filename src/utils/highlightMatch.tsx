const highlightMatch = (text: string, searchTerm: string) => {
  const regex = new RegExp(`(${searchTerm})`, "gi");
  return text.split(regex).map((part, index) => {
    if (part.toLowerCase() === searchTerm.toLowerCase()) {
      return <mark key={index}>{part}</mark>;
    }
    return part;
  });
};

export default highlightMatch;
