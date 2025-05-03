import { useFeedbackItemsContext } from "../../context/FeedbackItemsContextProvider";
import HashtagItem from "./HashtagItem";

type HashtagListProps = {
  handleSelectCompany: (company: string) => void;
};
export default function HashtagList({ handleSelectCompany }: HashtagListProps) {
  const { companyList } = useFeedbackItemsContext();
  return (
    <ul className="hashtags">
      {companyList.map((company) => {
        return (
          <HashtagItem
            company={company}
            key={company}
            onSelectCompany={handleSelectCompany}
          />
        );
      })}
    </ul>
  );
}
