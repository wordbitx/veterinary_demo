// Service data for the Afzal vet & pet clinic.
// SERVICES: the 7 pet services shown on the /services page.
// HOME_SERVICES: extra service entries not in SERVICES — the consultation
// card (used by the detail sheet) and the pet-food entry (the 8th card on
// the homepage grid, after the 7 pet services). The farm-animal section was
// removed in round 6 (15 Nov 2026); farm-animal images remain in
// public/assets/ unreferenced.

export interface Service {
  id: string;
  icon: string;
  name: string;
  desc: string;
  points: string[];
  book?: string;
}

export const SERVICES: Service[] = [
  {
    "id": "dogs-cats",
    "icon": "heart-pulse",
    "name": "Dogs & Cats Care",
    "desc": "Complete day-to-day care and checkups that keep your pets active, comfortable and happy.",
    "points": [
      "Full physical examination and health check",
      "Day-to-day care guidance for home",
      "Weight, coat and general condition review",
      "Honest advice on what your pet needs next"
    ]
  },
  {
    "id": "medical",
    "icon": "stethoscope",
    "name": "Medical Treatment",
    "desc": "Careful diagnosis and treatment for illness, injury and ongoing health conditions.",
    "points": [
      "Careful diagnosis before treatment",
      "Treatment for illness and injury",
      "Follow-up checks during recovery",
      "Clear guidance on medicine at home"
    ]
  },
  {
    "id": "vaccination",
    "icon": "syringe",
    "name": "Vaccination",
    "desc": "Timely vaccination that protects your pet against serious and preventable diseases.",
    "points": [
      "Vaccination for dogs, cats, rabbits & birds",
      "Schedule planned for your pet’s age",
      "Reminder guidance for the next dose",
      "Safe handling for nervous pets"
    ]
  },
  {
    "id": "surgery",
    "icon": "scissors",
    "name": "Surgery & Consultation",
    "desc": "Honest consultation and surgical care when your pet needs more than medicine.",
    "points": [
      "Honest consultation before any surgery",
      "Surgical care when medicine is not enough",
      "Recovery and aftercare guidance",
      "Follow-up visits after the procedure"
    ]
  },
  {
    "id": "preventive",
    "icon": "shield-plus",
    "name": "Preventive Healthcare",
    "desc": "Regular screening and prevention plans that catch problems early — before they grow.",
    "points": [
      "Regular health screening",
      "Prevention plan matched to your pet",
      "Early detection of common problems",
      "Seasonal care advice"
    ]
  },
  {
    "id": "nutrition",
    "icon": "salad",
    "name": "Nutrition & Health Checkups",
    "desc": "Feeding guidance and full health checkups matched to your pet’s age, breed and lifestyle.",
    "points": [
      "Full health checkup",
      "Feeding plan for age, breed and size",
      "Weight management guidance",
      "Food matched from the Pet Food Shop range"
    ]
  },
  {
    "id": "deworming",
    "icon": "bug-off",
    "name": "Deworming",
    "desc": "Safe, scheduled deworming that keeps parasites away from your pet — and your family.",
    "points": [
      "Safe deworming for dogs and cats",
      "Schedule for puppies and kittens too",
      "Deworming guidance for multi-pet homes",
      "Next-dose reminder guidance"
    ]
  },
];

export const HOME_SERVICES: Service[] = [
  {
    id: 'consultation',
    icon: 'stethoscope',
    name: 'Veterinary Consultation',
    desc: 'Checkups and treatment for your pet, with Dr Umair Afzal — the clinic’s main doctor — at the clinic in Kot Araian, Lahore.',
    points: [
      'Consultation with Dr Umair Afzal',
      'Careful examination before treatment',
      'Gentle, careful treatment — praised in our Google reviews',
      'Honest advice on what your pet needs next',
    ],
    book: 'Veterinary consultation',
  },
  {
    id: 'pet-food',
    icon: 'shopping-bag',
    name: 'Pet Food & Supplies',
    desc: 'Pet food and supplies available at the clinic shop — ask us on WhatsApp for what is in stock and prices.',
    points: [
      'Pet food and supplies available in store',
      'Message us on WhatsApp for availability and prices',
      'Ask which food suits your pet\u2019s age and size',
      'Visit the clinic shop in Kot Araian, Lahore',
    ],
    book: 'Pet food enquiry',
  },
];
