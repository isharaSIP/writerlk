// Use public folder images for production
const image1 = '/web1.png';
const image2 = '/web2.png';
const image3 = '/web3.png';
const image4 = '/web4.png';
const image5 = '/web5.png';
const image6 = '/web6.png';
const image7 = '/web7.png';
const image8 = '/web8.png';

export const services = [
  { id: 1, title: 'Assignments', desc: 'Reliable assignment help with clear, well-structured, and original content tailored to your needs.' },
  { id: 2, title: 'Type Settings', desc: 'Fast and accurate Sinhala and English typing with clean, professional formatting.' },
  { id: 3, title: 'Presentations', desc: 'Modern, attractive presentations designed to communicate your message effectively.' },
  { id: 4, title: 'Professional CV', desc: 'Neatly designed CVs that highlight your skills and help you make a strong impression.' }
];

export const stats = [
  { id: 'clients', number: 150, label: 'Happy Clients' },
  { id: 'projects', number: 350, label: 'Projects Delivered' },
  { id: 'rating', number: 4.9, label: 'Average Rating' },
  { id: 'years', number: 2, label: 'Years Experience' }
];

export const reviews = [
  
  { 
    id: 1, 
    name: 'Daniel R.', 
    role: 'Undergrad', 
    text: 'Clear structure, zero plagiarism, and friendly revisions. Exactly what I needed under deadline pressure.',
    image: image2,
    rating: 5,
    project: 'Research Paper on Climate Change'
  },
  { 
    id: 2, 
    name: 'Sofia M.', 
    role: 'Researcher', 
    text: 'Citation formatting was spot‑on. Saved hours double‑checking references. Professional and thorough work.',
    image: image3,
    rating: 5,
    project: 'Literature Review'
  },
  { 
    id: 3, 
    name: 'Marcus T.', 
    role: 'PhD Candidate', 
    text: 'Exceptional dissertation chapter help. The quality exceeded my expectations and helped me maintain my timeline.',
    image: image4,
    rating: 5,
    project: 'Dissertation Chapter 3'
  },
  { 
    id: 4, 
    name: 'Emma L.', 
    role: 'Master\'s Student', 
    text: 'Quick turnaround without compromising quality. They understood my requirements perfectly and delivered ahead of schedule.',
    image: image5,
    rating: 5,
    project: 'Thesis Proposal'
  },
  { 
    id: 5, 
    name: 'James W.', 
    role: 'Law Student', 
    text: 'Complex legal analysis made simple. Their expertise in academic writing really shows in the final product.',
    image: image6, 
    rating: 5,
    project: 'Constitutional Law Essay'
  },
  { 
    id: 6, 
    name: 'James W.', 
    role: 'Law Student', 
    text: 'Complex legal analysis made simple. Their expertise in academic writing really shows in the final product.',
    image: image7, 
    rating: 5,
    project: 'Constitutional Law Essay'
  },
  { 
    id: 7, 
    name: 'James W.', 
    role: 'Law Student', 
    text: 'Complex legal analysis made simple. Their expertise in academic writing really shows in the final product.',
    image: image8, 
    rating: 5,
    project: 'Constitutional Law Essay'
  },
  { 
    id: 8, 
    name: 'James W.', 
    role: 'Law Student', 
    text: 'Complex legal analysis made simple. Their expertise in academic writing really shows in the final product.',
    image: image1, // Reusing first image for 6th review since you have 5 images
    rating: 5,
    project: 'Constitutional Law Essay'
  }
];
