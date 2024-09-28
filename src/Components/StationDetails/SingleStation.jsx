import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import './SingleStation.css';


function SingleStation() {
    const { id } = useParams();
    const[station, setStation] = useState(null);

  useEffect(() => {
    fetch(`/data/stations.json`)
      .then(response => response.json())
      .then(data => {
        const stationData = data.find(station => station.id === id);
        setStation(stationData);
      })
      .catch(error => console.error('Error fetching station data:', error));
  }, [id]);

  // If no data is found or still loading
  if (!station) {
    return <h2>Loading Station Details...</h2>;
  }

  return (
    <div className="station-detail">
      {/* Header Image */}
      <div className="station-header">
        <img src={station.headerImage} alt={station.name} className="station-image" />
      </div>

      {/* Station Info */}
      <h1>{station.name}</h1>
      <p><strong>Location:</strong> {station.location}</p>
      <p><strong>Opening Hours:</strong> {station.hours}</p>

      {/* Available Connections */}
      <div className="station-connections">
        <h2>Available Connections</h2>
        <ul>
          {station.connections.map((conn, index) => (
            <li key={index}>
              <span>{conn.icon} {conn.type} - {conn.power}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Facilities */}
      <div className="station-facilities">
        <h2>Facilities</h2>
        <ul>
          {station.facilities.map((facility, index) => (
            <li key={index}>{facility}</li>
          ))}
        </ul>
      </div>

      {/* Price Information */}
      <div className="station-price">
        <h2>Price Information</h2>
        <p>{station.price}</p>
      </div>

      {/* User Ratings & Reviews */}
      <div className="station-reviews">
        <h2>User Ratings & Reviews</h2>
        <p><strong>Average Rating:</strong> {station.rating} / 5</p>
        <ul>
          {station.reviews.map((review, index) => (
            <li key={index}>
              <p><strong>{review.user}</strong>: {review.review} (Rating: {review.rating}/5)</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Check-In & Navigation Buttons */}
      <div className="station-actions">
        <button className="btn-check-in">Check In</button>
        <button className="btn-navigate">Get Direction</button>
      </div>
    </div>
  );
};

export default SingleStation
