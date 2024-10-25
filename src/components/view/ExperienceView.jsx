function ExperienceView({
  company,
  designation,
  location,
  startDate,
  endDate,
  description,
}) {
  return (
    <div className="edu-info">
      <div className="info">
        <div className="date">
          <p className="star-date">{startDate}</p>
          <p>-</p>
          <p className="end-date">{endDate}</p>
        </div>
        <p className="location">{location}</p>
      </div>

      <div className="info">
        <p className="school">{company}</p>
        <p className="degree">{designation}</p>
        <p className="degree">{description}</p>
      </div>
    </div>
  );
}

export default ExperienceView;
