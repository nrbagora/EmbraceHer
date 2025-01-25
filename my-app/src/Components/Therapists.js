import "./Therapists.css";

export default function TherapistsPage() {
  const therapists = [
    {
      id: 1,
      name: "Dr. Jane Smith",
      description: "Specializes in cognitive behavioral therapy and anxiety management.",
      contact: "jane.smith@example.com",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      name: "Dr. John Doe",
      description: "Expert in relationship counseling and personal growth.",
      contact: "john.doe@example.com",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      name: "Dr. Emily Johnson",
      description: "Focuses on mindfulness and stress reduction techniques.",
      contact: "emily.johnson@example.com",
      image: "https://via.placeholder.com/150"
    }
  ];

  return (
    <div className="therapists-page">
      <h1 className="title">Meet Our Therapists</h1>
      <div className="therapist-grid">
        {therapists.map((therapist) => (
          <div key={therapist.id} className="therapist-card">
            <img
              src={therapist.image}
              alt={therapist.name}
              className="therapist-image"
            />
            <h2 className="therapist-name">{therapist.name}</h2>
            <p className="therapist-description">{therapist.description}</p>
            <p className="therapist-contact">Contact: <span>{therapist.contact}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
