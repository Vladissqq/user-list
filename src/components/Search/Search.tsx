import "./index.scss";

interface SearchProps {
  value: string;
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({ value, handleSearch }: SearchProps) => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
