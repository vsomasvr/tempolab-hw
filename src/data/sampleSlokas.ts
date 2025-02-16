export interface Sloka {
  id: string;
  granthah: string;
  granthasya_khandah: string;
  slokah: string;
  anvaya: string;
  padaCheda: string;
  bhashyam: string;
  tags: string[];
}

export const sampleSlokas: Sloka[] = [
  {
    id: "1",
    granthah: "भगवद्गीता",
    granthasya_khandah: "अध्याय १",
    slokah:
      "धर्मक्षेत्रे कुरुक्षेत्रे समवेता युयुत्सवः ।\nमामकाः पाण्डवाश्चैव किमकुर्वत सञ्जय ॥१॥",
    anvaya:
      "हे सञ्जय, धर्मक्षेत्रे कुरुक्षेत्रे समवेताः युयुत्सवः मामकाः पाण्डवाः च एव किम् अकुर्वत",
    padaCheda:
      "धर्मक्षेत्रे । कुरुक्षेत्रे । समवेताः । युयुत्सवः । मामकाः । पाण्डवाः । च । एव । किम् । अकुर्वत । सञ्जय ।",
    bhashyam:
      "This is the first verse of the Bhagavad Gita, where Dhritarashtra asks Sanjaya about what happened when his sons and the Pandavas gathered on the battlefield of Kurukshetra.",
    tags: ["dharma", "war", "kurukshetra"],
  },
  {
    id: "2",
    granthah: "रामायण",
    granthasya_khandah: "बालकाण्ड",
    slokah:
      "तपः स्वाध्यायनिरतं तपस्वी वाग्विदां वरम् ।\nनारदं परिपप्रच्छ वाल्मीकिर्मुनिपुङ्गवम् ॥१॥",
    anvaya:
      "तपस्वी वाल्मीकिः तपः स्वाध्यायनिरतं वाग्विदां वरं मुनिपुङ्गवं नारदं परिपप्रच्छ",
    padaCheda:
      "तपः । स्वाध्यायनिरतम् । तपस्वी । वाग्विदाम् । वरम् । नारदम् । परिपप्रच्छ । वाल्मीकिः । मुनिपुङ्गवम् ।",
    bhashyam:
      "This is the opening verse of the Ramayana, where Valmiki asks Narada about the qualities of the perfect man.",
    tags: ["dharma", "wisdom", "valmiki"],
  },
  {
    id: "3",
    granthah: "भगवद्गीता",
    granthasya_khandah: "अध्याय २",
    slokah:
      "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन ।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि ॥४७॥",
    anvaya:
      "ते कर्मणि एव अधिकारः, फलेषु कदाचन मा। कर्मफलहेतुः मा भूः, अकर्मणि ते सङ्गः मा अस्तु",
    padaCheda:
      "कर्मणि । एव । अधिकारः । ते । मा । फलेषु । कदाचन । मा । कर्मफलहेतुः । भूः । मा । ते । सङ्गः । अस्तु । अकर्मणि ।",
    bhashyam:
      "This famous verse emphasizes the importance of performing one's duties without attachment to the results.",
    tags: ["karma", "duty", "detachment"],
  },
];

export const granthasList = ["भगवद्गीता", "रामायण", "महाभारत", "उपनिषद्"];

export const khandaList = {
  भगवद्गीता: ["अध्याय १", "अध्याय २", "अध्याय ३", "अध्याय ४"],
  रामायण: ["बालकाण्ड", "अयोध्याकाण्ड", "अरण्यकाण्ड", "किष्किन्धाकाण्ड"],
  महाभारत: ["आदिपर्व", "सभापर्व", "वनपर्व", "विराटपर्व"],
  उपनिषद्: ["ईशोपनिषद्", "केनोपनिषद्", "कठोपनिषद्", "प्रश्नोपनिषद्"],
};
