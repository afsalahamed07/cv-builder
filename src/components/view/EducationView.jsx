function EducationView({ school, degree, location, startDate, endDate }) {
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
        <p className="school">{school}</p>
        <p className="degree">{degree}</p>
      </div>
    </div>
  );
}

export default EducationView;
