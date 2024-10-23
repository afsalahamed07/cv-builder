function PersonalView({ personalState }) {
  return (
    <div className="view personal-view">
      <h1>
        {personalState.firstName} {personalState.lastName}
      </h1>
      <div className="personal-info">
        <p>{personalState.email}</p>
        <p>{personalState.phone}</p>
        <p>{personalState.address}</p>
      </div>
    </div>
  );
}

export default PersonalView;
