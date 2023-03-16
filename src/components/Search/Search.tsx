import "./index.scss";

interface SearchProps {
  searchTerm: string;
  setSearchTerm: (value: string) => void;
}

const Search = ({ searchTerm, setSearchTerm }: SearchProps) => {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
