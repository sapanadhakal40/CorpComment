import { useEffect, useMemo, useState } from "react";
import Container from "./layout/Container";
import Footer from "./layout/Footer";
import HashtagList from "./hashtag/HashtagList";
import { TFeedbackItem } from "../lib/type";
import FeedbackItemsContextProvider from "../context/FeedbackItemsContextProvider";

function App() {
  const [selectedCompany, setSelectedCompany] = useState("");

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <div className="app">
      <Footer />
      <FeedbackItemsContextProvider>
        <Container />
      </FeedbackItemsContextProvider>

      <HashtagList
        companyList={companyList}
        handleSelectCompany={handleSelectCompany}
      />
    </div>
  );
}

export default App;
