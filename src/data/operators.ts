/**
 * Base de données éditoriale et réglementaire des opérateurs de paris sportifs
 * agréés par l'Autorité Nationale des Jeux (ANJ) en France.
 * 
 * RÈGLE STRICTE DE CONFORMITÉ :
 * - Uniquement des opérateurs autorisés en France sous le scope "Paris Sportifs"
 * - Aucun lien intermédiaire (/repere/, /go/, redirect script, cloaking)
 * - Display URL = Final Destination URL (domaine officiel français .fr)
 * - Données de licence et dates de contrôle vérifiées
 */

export interface PaymentOption {
  name: string;
  minDeposit: string;
  instant: boolean;
  fees: string;
}

export interface Operator {
  id: string;
  slug: string;
  name: string;
  legalName: string;
  headquarters: string;
  category: 'Paris sportifs';
  anjLicence: string;
  displayUrl: string;
  finalDestinationUrl: string;
  dateChecked: string;
  verified: boolean;
  score: number; // sur 5
  payoutRating: number; // sur 5
  appRating: number; // sur 5
  supportRating: number; // sur 5
  brandColor: string;
  brandAccent: string;
  shortDescription: string;
  editorialVerdict: string;
  sportsCovered: string[];
  betTypes: string[];
  keyFeatures: string[];
  paymentMethods: PaymentOption[];
  minDeposit: string;
  mobileApp: {
    ios: boolean;
    android: boolean;
    iosScore: string;
    androidScore: string;
    notes: string;
  };
  customerSupport: {
    liveChat: boolean;
    email: string;
    phone: string | null;
    hours: string;
    responseSpeed: string;
  };
  responsibleGaming: {
    depositLimits: boolean;
    betLimits: boolean;
    selfExclusion: boolean;
    timeReminder: boolean;
    autoWithdrawalThreshold: boolean;
    details: string;
  };
  pros: string[];
  cons: string[];
  detailedContent: {
    overview: string;
    regulation: string;
    sportsOffer: string;
    payments: string;
    appReview: string;
    supportReview: string;
    responsiblePlay: string;
  };
}

export const OPERATORS: Operator[] = [
  {
    id: 'winamax',
    slug: 'winamax',
    name: 'Winamax',
    legalName: 'Winamax SA',
    headquarters: 'Paris, France',
    category: 'Paris sportifs',
    anjLicence: 'Agrément ANJ n° 0003-PS-2024-05-14-AGR-02',
    displayUrl: 'www.winamax.fr',
    finalDestinationUrl: 'https://www.winamax.fr',
    dateChecked: '23 Septembre 2026',
    verified: true,
    score: 4.9,
    payoutRating: 4.9,
    appRating: 4.7,
    supportRating: 4.5,
    brandColor: '#E60000',
    brandAccent: '#111827',
    shortDescription: 'Réputé pour proposer régulièrement les meilleures cotes sur le football en France et des fonctionnalités innovantes telles que MyMatch et les cotes boostées.',
    editorialVerdict: 'Pour les parieurs cherchant le taux de retour aux joueurs (TRJ) le plus compétitif du marché français, Winamax est un incontournable. Société française basée à Paris, elle allie communauté active et rigueur réglementaire.',
    sportsCovered: ['Football', 'Tennis', 'Basketball', 'Rugby', 'Handball', 'Formule 1', 'Athlétisme', 'Volleyball', 'Baseball', 'Sports d’hiver'],
    betTypes: ['Simple', 'Combiné', 'MyMatch (combinaisons sur un même match)', 'Système', 'Live betting', 'Cash Out'],
    keyFeatures: ['Meilleures cotes mesurées sur le football (Ligue 1 & Europe)', 'Winamax TV avec streaming gratuit pour les parieurs', 'Créateur de paris MyMatch', 'Virement bancaire instantané'],
    minDeposit: '10 €',
    paymentMethods: [
      { name: 'Carte Bancaire / Visa / Mastercard', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'PayPal', minDeposit: '15 €', instant: true, fees: '0 %' },
      { name: 'Apple Pay', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Virement bancaire', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Paysafecard / Skrill / Neteller', minDeposit: '10 €', instant: true, fees: '0 %' },
    ],
    mobileApp: {
      ios: true,
      android: true,
      iosScore: '4.7/5 (App Store)',
      androidScore: '4.5/5 (Google Play)',
      notes: 'Application rapide avec mise à jour des cotes en direct ultra-dynamique et accès à Winamax TV.'
    },
    customerSupport: {
      liveChat: false,
      email: 'support@winamax.fr',
      phone: null,
      hours: '7j/7 24h/24 par formulaire et email',
      responseSpeed: 'Généralement en moins de 4 heures'
    },
    responsibleGaming: {
      depositLimits: true,
      betLimits: true,
      selfExclusion: true,
      timeReminder: true,
      autoWithdrawalThreshold: true,
      details: 'Plafonds de mise et de versement hebdomadaires stricts, auto-exclusion temporaire ou définitive, rappel du temps de session.'
    },
    pros: [
      'Niveau de cotes parmi les plus élevés de France sur les grands championnats',
      'Outil MyMatch très performant pour créer son propre pari',
      'Winamax TV avec retransmission de championnats majeurs',
      'Entreprise française dont le siège social est situé à Paris'
    ],
    cons: [
      'Absence de Live Chat instantané (assistance par email et formulaire)',
      'Interface parfois dense pour un débutant complet'
    ],
    detailedContent: {
      overview: 'Winamax SA est une société anonyme française établie au cœur de Paris. Titulaire de l’agrément ANJ n° 0003-PS-2024-05-14-AGR-02 pour l’activité de paris sportifs en ligne, Winamax a su bâtir une réputation solide grâce à une politique de marges serrées permettant d’afficher des cotes très compétitives.',
      regulation: 'En tant qu’opérateur établi sur le territoire national français, Winamax est soumis à la surveillance directe de l’ANJ. La plateforme répond à toutes les obligations légales de vérification d’identité (KYC), de lutte contre la fraude et de conservation des données conformément au RGPD.',
      sportsOffer: 'Winamax propose une offre exhaustive sur les sports majeurs. L’innovation principale réside dans le format MyMatch, permettant de combiner plusieurs scénarios (buteur, nombre de corners, résultat mi-temps) sur une seule et même rencontre avec calcul instantané de la cote.',
      payments: 'Les transactions sont protégées par le protocole 3D Secure. Les dépôts sont sans frais via carte bancaire, PayPal, Apple Pay et solutions prépayées. Les retraits de gains sont traités gratuitement par virement bancaire sur compte validé.',
      appReview: 'L’application mobile pour iOS et Android concentre l’ensemble de l’expérience de jeu sans concession. Elle intègre le live streaming Winamax TV et permet une réactivité optimale lors des paris en cours de jeu.',
      supportReview: 'L’assistance est gérée par email via une équipe dédiée située en France. Les réponses sont détaillées et personnalisées, bien que l’absence de clavardage en direct soit parfois regrettée par les utilisateurs habitués à l’instantané.',
      responsiblePlay: 'Winamax met à disposition un module complet de modération personnelle : fixation des plafonds hebdomadaires dès l’ouverture du compte, alerte de temps passé, et information permanente sur les dispositifs d’aide pour joueurs vulnérables.'
    }
  },
  {
    id: 'vbet',
    slug: 'vbet',
    name: 'Vbet',
    legalName: 'Vbet France SAS',
    headquarters: 'Paris, France',
    category: 'Paris sportifs',
    anjLicence: 'Agrément ANJ n° 0057-PS-2022-07-07',
    displayUrl: 'www.vbet.fr',
    finalDestinationUrl: 'https://www.vbet.fr',
    dateChecked: '23 Septembre 2026',
    verified: true,
    score: 4.4,
    payoutRating: 4.4,
    appRating: 4.3,
    supportRating: 4.5,
    brandColor: '#F58220',
    brandAccent: '#1F2937',
    shortDescription: 'Partenaire officiel de grands clubs européens, Vbet se distingue par une interface colorée, des cotes solides sur le football et des offres régulières.',
    editorialVerdict: 'Vbet apporte un souffle de modernité avec une plateforme fluide, de nombreuses options de paris et une équipe d’assistance facilement joignable.',
    sportsCovered: ['Football', 'Tennis', 'Basketball', 'Rugby', 'Handball', 'Volleyball', 'Cyclisme', 'MMA', 'Hockey sur glace', 'Sports mécaniques'],
    betTypes: ['Simple', 'Combiné', 'Système', 'Paris en direct', 'Cash Out partiel et total'],
    keyFeatures: ['Nombreux partenariats sportifs en France', 'Cotes compétitives sur le football', 'Option Cash Out flexible', 'Support réactif par Live Chat'],
    minDeposit: '10 €',
    paymentMethods: [
      { name: 'Carte Bancaire / Visa / Mastercard', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'PayPal', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Apple Pay', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Skrill / Neteller', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Virement bancaire', minDeposit: '10 €', instant: false, fees: '0 %' },
    ],
    mobileApp: {
      ios: true,
      android: true,
      iosScore: '4.4/5 (App Store)',
      androidScore: '4.2/5 (Google Play)',
      notes: 'Application moderne aux teintes vives, navigation rapide par ligues et affichage des statistiques en avant-match.'
    },
    customerSupport: {
      liveChat: true,
      email: 'support@vbet.fr',
      phone: '07 55 53 94 61',
      hours: '7j/7 de 09h00 à 23h00',
      responseSpeed: 'Chat disponible directement sur le site'
    },
    responsibleGaming: {
      depositLimits: true,
      betLimits: true,
      selfExclusion: true,
      timeReminder: true,
      autoWithdrawalThreshold: true,
      details: 'Plafonds obligatoires, auto-exclusion temporaire et définitive, modération selon le Code de la sécurité intérieure.'
    },
    pros: [
      'Interface visuelle dynamique et intuitive',
      'Excellente sélection d’événements sur le football international',
      'Assistance en direct disponible en continu',
      'Cash Out avec gestion des montants partiels'
    ],
    cons: [
      'Pas de service de vidéo streaming intégré',
      'Délai de traitement des retraits parfois de 48 heures'
    ],
    detailedContent: {
      overview: 'Vbet France SAS est titulaire de l’agrément ANJ n° 0057-PS-2022-07-07. Bénéficiant de partenariats reconnus avec des clubs de football européens de premier plan, la plateforme propose une offre complète de paris sportifs.',
      regulation: 'L’ensemble des opérations de Vbet en France est encadré par les exigences réglementaires de l’ANJ : contrôle de majorité, traçabilité des dépôts et conformité des cotes proposées.',
      sportsOffer: 'Les parieurs ont accès aux compétitions de football de premier ordre ainsi qu’à une large sélection de sports individuels et collectifs agréés.',
      payments: 'Les dépôts sont sécurisés et acceptent cartes bancaires, portefeuilles électroniques et virement bancaire. Les retraits s’opèrent vers le compte bancaire de l’utilisateur vérifié.',
      appReview: 'L’application Vbet est ergonomique et permet un placement de pari en direct rapide, avec une gestion claire du tableau de bord utilisateur.',
      supportReview: 'Le support est joignable tous les jours par clavardage, par téléphone et par courrier électronique.',
      responsiblePlay: 'La politique de jeu responsable inclut la limitation hebdomadaire stricte dès l’ouverture du compte et des rappels constants sur les risques liés au jeu excessif.'
    }
  },
  {
    id: 'netbet',
    slug: 'netbet',
    name: 'NetBet',
    legalName: 'NetBet FR SAS',
    headquarters: 'Paris, France',
    category: 'Paris sportifs',
    anjLicence: 'Agrément ANJ n° 0043-PS-2026-06-03-AGR-03',
    displayUrl: 'www.netbet.fr',
    finalDestinationUrl: 'https://www.netbet.fr',
    dateChecked: '23 Septembre 2026',
    verified: true,
    score: 4.4,
    payoutRating: 4.3,
    appRating: 4.4,
    supportRating: 4.4,
    brandColor: '#2B2B2B',
    brandAccent: '#70B243',
    shortDescription: 'Présent en France depuis plus d’une décennie, NetBet propose une offre de paris riche, des grilles de pronostics et le programme Club NetBet.',
    editorialVerdict: 'NetBet est un opérateur historique stable qui séduit par ses grilles de pronostics collaboratives et son programme d’avantages fidélité.',
    sportsCovered: ['Football', 'Tennis', 'Basketball', 'Rugby', 'Handball', 'Volleyball', 'Cyclisme', 'Formule 1', 'Sports d’hiver', 'Snooker'],
    betTypes: ['Simple', 'Combiné', 'Grilles NetBet', 'Paris en direct', 'Cash Out'],
    keyFeatures: ['Grilles de pronostics exclusives', 'Club NetBet avec points de fidélité', 'Option Cash Out', 'Validation simple et sécurisée'],
    minDeposit: '10 €',
    paymentMethods: [
      { name: 'Carte Bancaire / Visa / Mastercard', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'PayPal', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Apple Pay', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Paysafecard / Ticket Premium', minDeposit: '10 €', instant: true, fees: '0 %' },
      { name: 'Virement bancaire', minDeposit: '10 €', instant: false, fees: '0 %' },
    ],
    mobileApp: {
      ios: true,
      android: true,
      iosScore: '4.4/5 (App Store)',
      androidScore: '4.2/5 (Google Play)',
      notes: 'Application claire avec accès rapide aux grilles quotidiennes et suivi en direct des rencontres.'
    },
    customerSupport: {
      liveChat: true,
      email: 'info@netbet.fr',
      phone: '09 73 05 36 92',
      hours: '7j/7 de 10h00 à 22h00',
      responseSpeed: 'Assistance en direct disponible tous les jours'
    },
    responsibleGaming: {
      depositLimits: true,
      betLimits: true,
      selfExclusion: true,
      timeReminder: true,
      autoWithdrawalThreshold: true,
      details: 'Encadrement préventif strict, fixation préalable obligatoire des plafonds et respect des directives ANJ.'
    },
    pros: [
      'Grilles de paris très appréciées pour tenter des gains combinés',
      'Programme de fidélité Club NetBet',
      'Assistance téléphonique et chat réactifs',
      'Société française basée à Paris'
    ],
    cons: [
      'Pas de flux vidéo en direct (streaming)',
      'Cotes moyennes sur les rencontres de tennis secondaire'
    ],
    detailedContent: {
      overview: 'NetBet FR SAS est une société française établie à Paris, titulaire de l’agrément ANJ n° 0043-PS-2026-06-03-AGR-03. Forte de plus de dix ans de présence sur le marché français, elle offre une expérience de paris sportifs stable et reconnue.',
      regulation: 'La conformité aux exigences de l’ANJ garantit la régularité des tirages de cotes, le respect des règles sur les paris autorisés et la protection des fonds des usagers.',
      sportsOffer: 'L’opérateur propose les grands sports d’équipe et individuels, complétés par les fameuses grilles NetBet permettant de pronostiquer sur une série de matchs sélectionnés.',
      payments: 'Les dépôts sont réalisables par cartes bancaires françaises et portefeuilles électroniques. Les retraits sont versés directement par virement bancaire sur compte courant nominatif.',
      appReview: 'L’application NetBet permet de composer ses grilles et de suivre ses paris en toute fluidité depuis n’importe quel smartphone ou tablette.',
      supportReview: 'Une équipe de support francophone est joignable 7 jours sur 7 par Live Chat, email et téléphone.',
      responsiblePlay: 'NetBet applique avec rigueur le cadre légal du jeu responsable : paramétrage obligatoire des limites de jeu et renvoi permanent vers les lignes d’écoute officielles.'
    }
  },
  {
    id: 'feelingbet',
    slug: 'feelingbet',
    name: 'FeelingBet',
    legalName: 'Feeling Publishing',
    headquarters: 'Marseille, France',
    category: 'Paris sportifs',
    anjLicence: 'Agrément ANJ n° 0056-PS-2026-03-04-AGR-01',
    displayUrl: 'feelingbet.fr',
    finalDestinationUrl: 'https://feelingbet.fr',
    dateChecked: '23 Septembre 2026',
    verified: true,
    score: 4.2,
    payoutRating: 4.2,
    appRating: 4.1,
    supportRating: 4.2,
    brandColor: '#6D28D9',
    brandAccent: '#FFFFFF',
    shortDescription: 'Opérateur de paris sportifs exploité à Marseille par Feeling Publishing, avec un agrément ANJ renouvelé en 2026 et un domaine français dédié.',
    editorialVerdict: 'FeelingBet convient aux parieurs qui cherchent un opérateur français de taille plus réduite, limité aux paris sportifs et joignable par email.',
    sportsCovered: ['Football', 'Tennis', 'Basketball', 'Rugby', 'Handball', 'Volleyball', 'Cyclisme', 'Formule 1'],
    betTypes: ['Simple', 'Combiné', 'Système', 'Paris en direct'],
    keyFeatures: ['Agrément paris sportifs renouvelé en 2026', 'Société française basée à Marseille', 'Domaine officiel feelingbet.fr', 'Contact par email et formulaire'],
    minDeposit: 'Voir le site',
    paymentMethods: [
      { name: 'Carte Bancaire', minDeposit: 'Voir le site', instant: true, fees: 'Selon l’opérateur' },
      { name: 'Virement bancaire', minDeposit: 'Voir le site', instant: false, fees: 'Selon l’opérateur' },
    ],
    mobileApp: {
      ios: false,
      android: false,
      iosScore: 'Site consultable sur mobile',
      androidScore: 'Site consultable sur mobile',
      notes: 'L’offre est accessible depuis le navigateur mobile sur feelingbet.fr. Aucune note d’App Store ou de Google Play n’est affichée ici.'
    },
    customerSupport: {
      liveChat: false,
      email: 'support@feelingbet.fr',
      phone: null,
      hours: 'Formulaire et email, selon les horaires indiqués sur feelingbet.fr',
      responseSpeed: 'Contact par email support@feelingbet.fr et formulaire en ligne'
    },
    responsibleGaming: {
      depositLimits: true,
      betLimits: true,
      selfExclusion: true,
      timeReminder: true,
      autoWithdrawalThreshold: true,
      details: 'Plafonds obligatoires dès l’inscription, auto-exclusion et renvoi vers les dispositifs ANJ et Joueurs Info Service.'
    },
    pros: [
      'Agrément limité aux paris sportifs sur feelingbet.fr',
      'Numéro d’agrément renouvelé le 4 mars 2026',
      'Société éditrice française, siège à Marseille',
      'Contact client publié : support@feelingbet.fr'
    ],
    cons: [
      'Catalogue et outils moins étendus que ceux des opérateurs historiques',
      'Assistance principalement par email et formulaire'
    ],
    detailedContent: {
      overview: 'FeelingBet est exploité par Feeling Publishing, société dont le siège publié est 99 rue Floralia, 13008 Marseille. L’agrément de paris sportifs en ligne n° 0056-PS-2021-03-04 a été renouvelé par la décision ANJ n° 2026-030 du 12 février 2026, sous le numéro 0056-PS-2026-03-04-AGR-01, pour cinq ans à compter du 4 mars 2026.',
      regulation: 'La décision ANJ autorise les paris sportifs en la forme mutuelle et à cote, accessibles depuis le seul nom de domaine feelingbet.fr. Le registre des opérateurs agréés classe ce site dans la catégorie paris sportifs.',
      sportsOffer: 'L’offre porte sur les compétitions de paris sportifs autorisées en France. Cette fiche ne couvre pas d’autre catégorie de jeux.',
      payments: 'Les dépôts et les retraits suivent le cadre français : vérification d’identité et virement des gains vers un compte bancaire au nom du joueur. Les moyens précis et les seuils sont ceux affichés sur feelingbet.fr au moment du dépôt.',
      appReview: 'La consultation se fait sur feelingbet.fr, y compris depuis un navigateur mobile. Cette fiche ne publie pas de note d’application tant qu’une fiche App Store ou Google Play n’a pas été contrôlée.',
      supportReview: 'L’ANJ recense pour FeelingBet l’email support@feelingbet.fr et le formulaire https://feelingbet.fr/contactez-nous.',
      responsiblePlay: 'Comme tout opérateur agréé, FeelingBet doit proposer les plafonds de dépôt et de mise, le seuil de retrait automatique et l’accès à l’interdiction volontaire de jeux de l’ANJ.'
    }
  },
  {
    id: 'olybet',
    slug: 'olybet',
    name: 'Olybet',
    legalName: 'FP Opérateur',
    headquarters: 'Toulouse, France',
    category: 'Paris sportifs',
    anjLicence: 'Agrément ANJ n° 0060-PS-2023-04-20',
    displayUrl: 'www.olybet.fr',
    finalDestinationUrl: 'https://www.olybet.fr',
    dateChecked: '23 Septembre 2026',
    verified: true,
    score: 4.2,
    payoutRating: 4.2,
    appRating: 4.1,
    supportRating: 4.2,
    brandColor: '#0F766E',
    brandAccent: '#FFFFFF',
    shortDescription: 'Marque de paris sportifs exploitée à Toulouse par FP Opérateur, agréée par l’ANJ pour le seul domaine olybet.fr.',
    editorialVerdict: 'Olybet est un opérateur français de paris sportifs, avec un agrément encore dans sa période de cinq ans.',
    sportsCovered: ['Football', 'Tennis', 'Basketball', 'Rugby', 'Handball', 'Volleyball', 'Hockey sur glace', 'Sports mécaniques'],
    betTypes: ['Simple', 'Combiné', 'Système', 'Paris en direct'],
    keyFeatures: ['Agrément paris sportifs délivré le 20 avril 2023', 'Société FP Opérateur à Toulouse', 'Domaine officiel olybet.fr', 'Contact support@olybet.fr'],
    minDeposit: 'Voir le site',
    paymentMethods: [
      { name: 'Carte Bancaire', minDeposit: 'Voir le site', instant: true, fees: 'Selon l’opérateur' },
      { name: 'Virement bancaire', minDeposit: 'Voir le site', instant: false, fees: 'Selon l’opérateur' },
    ],
    mobileApp: {
      ios: false,
      android: false,
      iosScore: 'Site consultable sur mobile',
      androidScore: 'Site consultable sur mobile',
      notes: 'L’offre est accessible depuis le navigateur sur olybet.fr. Aucune note d’App Store ou de Google Play n’est affichée ici.'
    },
    customerSupport: {
      liveChat: false,
      email: 'support@olybet.fr',
      phone: null,
      hours: 'Selon les horaires indiqués sur olybet.fr',
      responseSpeed: 'Contact publié : support@olybet.fr'
    },
    responsibleGaming: {
      depositLimits: true,
      betLimits: true,
      selfExclusion: true,
      timeReminder: true,
      autoWithdrawalThreshold: true,
      details: 'Plafonds obligatoires, auto-exclusion et information sur l’interdiction volontaire de jeux auprès de l’ANJ.'
    },
    pros: [
      'Catégorie ANJ limitée aux paris sportifs',
      'Agrément 0060-PS-2023-04-20 encore en cours jusqu’au 20 avril 2028',
      'Éditeur français, siège à Toulouse',
      'Lien direct vers www.olybet.fr'
    ],
    cons: [
      'Notoriété plus faible que les opérateurs historiques du marché',
      'Moyens de contact publics centrés sur l’email'
    ],
    detailedContent: {
      overview: 'Olybet est exploité en France par FP Opérateur, 59 allées Jean Jaurès, 31000 Toulouse. L’ANJ a délivré à cette société l’agrément de paris sportifs en ligne n° 0060-PS-2023-04-20 le 20 avril 2023, pour cinq ans. Le registre des opérateurs agréés indique le site olybet.fr dans la seule catégorie paris sportifs.',
      regulation: 'L’agrément couvre les paris sportifs en ligne. Il reste valable jusqu’au 20 avril 2028, sauf abrogation. Le domaine autorisé affiché par l’opérateur et par l’ANJ est olybet.fr.',
      sportsOffer: 'La fiche décrit uniquement l’offre de paris sportifs. Les compétitions proposées sont celles autorisées par l’ANJ pour cette catégorie.',
      payments: 'Les retraits de gains d’un opérateur agréé en France s’effectuent par virement vers un compte bancaire au nom du titulaire, après vérification d’identité. Les seuils de dépôt sont ceux indiqués sur olybet.fr.',
      appReview: 'Le site olybet.fr est utilisable sur mobile. Cette fiche n’attribue pas de note d’application store sans contrôle séparé de l’App Store et de Google Play.',
      supportReview: 'L’opérateur publie l’adresse support@olybet.fr comme contact du service client.',
      responsiblePlay: 'FP Opérateur est soumis aux obligations de jeu responsable de l’ANJ : plafonds de versement et de mise, seuil de retrait automatique et information sur l’interdiction volontaire de jeux.'
    }
  }
];

export const AUDIT_TABLE_DATA = OPERATORS.map(op => ({
  name: op.name,
  legalName: op.legalName,
  displayUrl: op.displayUrl,
  finalDestinationUrl: op.finalDestinationUrl,
  anjLicence: op.anjLicence,
  category: op.category,
  dateChecked: op.dateChecked,
  verified: op.verified
}));
