// Afzal vet & pet clinic — services.
// HONESTY RULE: only services verified for THIS clinic.
// Verified: vet consultations (Dr Afzal & Dr Umair Afzal) and a pet food
// shop at the clinic. No home visits, no online clinic, no livestock care,
// no prices — none of those are verified for this clinic. Anything else the
// user confirms later gets added here.
export interface Service {
  id: string;
  icon: string;
  name: string;
  desc: string;
  points: string[];
  /** label used by the booking wizard's service select */
  book: string;
}

export const SERVICES: Service[] = [
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
