type HashtagListProps = {
  companyList: string[];
};
export default function HashtagList({ companyList }: HashtagListProps) {
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <li key={company}>
            <button>#{company}</button>
          </li>
        );
      })}
    </ul>
  );
}
