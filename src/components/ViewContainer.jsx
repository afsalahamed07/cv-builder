import PersonalView from "./PersonalView";

function ViewContainer({ personalState }) {
  return (
    <div className="view-container">
      <PersonalView personalState={personalState} />
    </div>
  );
}

export default ViewContainer;
