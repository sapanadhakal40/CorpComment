import FeedbackItem from "./FeedbackItem";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import { useFeedbackItemsContext } from "../../context/FeedbackItemsContextProvider";

export default function FeedbackList() {
  const { isLoading, errorMessage, feedbackItems } = useFeedbackItemsContext();

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItem) => {
        return (
          <FeedbackItem key={feedbackItem.id} feedbackItem={feedbackItem} />
        );
      })}
    </ol>
  );
}
