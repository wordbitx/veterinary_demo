// Service data for the Afzal vet & pet clinic.
// 14 entries: 7 pet services, 1 combined livestock entry (detail sheet only),
// and 6 livestock services. The site renders 13 service cards (7 pet + 6 livestock).

export interface Service {
  id: string;
  icon: string;
  name: string;
  desc: string;
  points: string[];
  lv?: number;
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
      "Herd deworming available for livestock",
      "Next-dose reminder guidance"
    ]
  },
  {
    "id": "livestock",
    "icon": "beef",
    "name": "Livestock Care & Artificial Insemination",
    "desc": "Complete care for cow, buffalo, goat and horse — treatment, vaccination, routine checkups and professional artificial insemination, delivered at your farm.",
    "points": [
      "Cow, buffalo, goat and horse care",
      "Treatment of diseases & routine checkups",
      "Vaccination, deworming & nutrition guidance",
      "Artificial insemination for better breeds"
    ]
  },
  {
    "id": "cow",
    "lv": 1,
    "icon": "beef",
    "name": "Cow Care",
    "book": "Routine Checkup (Livestock)",
    "desc": "Complete health care for your cows — checkups, treatment and ongoing herd care at your farm.",
    "points": [
      "Full health checkup for dairy & beef cows",
      "Treatment of illness and injury",
      "Vaccination & deworming schedule",
      "Feeding and milk-production guidance"
    ]
  },
  {
    "id": "buffalo",
    "lv": 1,
    "icon": "paw-print",
    "name": "Buffalo Care",
    "book": "Routine Checkup (Livestock)",
    "desc": "Dedicated care for buffalo — health checks, disease treatment and breeding support at your farm.",
    "points": [
      "Complete physical examination",
      "Treatment of common buffalo diseases",
      "Vaccination & deworming",
      "Breeding and nutrition guidance"
    ]
  },
  {
    "id": "goat",
    "lv": 1,
    "icon": "paw-print",
    "name": "Goat Care",
    "book": "Routine Checkup (Livestock)",
    "desc": "Practical, affordable care for goats — from single animals to full herd visits.",
    "points": [
      "Health checkups for goats of all ages",
      "Disease treatment & parasite control",
      "Vaccination & deworming",
      "Herd health planning"
    ]
  },
  {
    "id": "horse",
    "lv": 1,
    "icon": "paw-print",
    "name": "Horse Care",
    "book": "Routine Checkup (Livestock)",
    "desc": "Careful examination and treatment for horses — soundness, wounds, illness and routine health.",
    "points": [
      "Full health & soundness examination",
      "Wound care and treatment",
      "Vaccination & deworming",
      "Feeding and condition guidance"
    ]
  },
  {
    "id": "ai",
    "lv": 1,
    "icon": "dna",
    "name": "Artificial Insemination",
    "book": "Artificial Insemination",
    "desc": "Professional artificial insemination for better breeds and higher production, done at your farm.",
    "points": [
      "Professional AI technique at your farm",
      "Better breeds & higher production",
      "Timing guidance for best results",
      "Follow-up pregnancy advice"
    ]
  },
  {
    "id": "routine",
    "lv": 1,
    "icon": "clipboard-check",
    "name": "Routine Checkups",
    "book": "Routine Checkup (Livestock)",
    "desc": "Scheduled farm visits that catch small problems early — before they cost you animals or income.",
    "points": [
      "Regular herd health visits",
      "Early detection of disease",
      "Vaccination & deworming kept on schedule",
      "Simple records of every visit"
    ]
  }
];
