import './UserProfile.css';

export default function UserProfile() {
  return (
    <div className="userprofile-layout">
      <div className="userprofile-section">
        <h3>Personal Details</h3>
        <div className="userprofile-content">
          {/* Placeholder for personal details */}
          <div>Name: John Doe</div>
          <div>Email: john.doe@email.com</div>
          <div>Phone: +91-9876543210</div>
        </div>
      </div>
      <div className="userprofile-section">
        <h3>Personal Address</h3>
        <div className="userprofile-content">
          {/* Placeholder for personal address */}
          <div>123, Main Street</div>
          <div>City: Mumbai</div>
          <div>State: Maharashtra</div>
          <div>Pincode: 400001</div>
        </div>
      </div>
      <div className="userprofile-section">
        <h3>Business Address</h3>
        <div className="userprofile-content">
          {/* Placeholder for business address */}
          <div>456, Corporate Park</div>
          <div>City: Pune</div>
          <div>State: Maharashtra</div>
          <div>Pincode: 411001</div>
        </div>
      </div>
    </div>
  );
} 