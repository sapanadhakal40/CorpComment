import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "B",
    companyName: "Byte",
    text: "test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 493,
    badgeLetter: "A",
    companyName: "Amazon",
    text: "This is a test",
    daysAgo: 2,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}
