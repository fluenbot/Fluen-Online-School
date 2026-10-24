import { Language } from '../types';

export interface Translations {
  nav: {
    home: string;
    courses: string;
    formats: string;
    teacher: string;
    about: string;
    faq: string;
    contacts: string;
    ctaButton: string;
  };
  hero: {
    badge: string;
    headline: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
    perks: {
      location: string;
      formats: string;
      goals: string;
    };
    lessonSnippet: {
      tag: string;
      title: string;
      note: string;
    };
  };
  audience: {
    title: string;
    subtitle: string;
    adults: {
      title: string;
      desc: string;
      button: string;
    };
    kids: {
      title: string;
      desc: string;
      button: string;
    };
    zero: {
      title: string;
      desc: string;
      button: string;
    };
  };
  why: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      desc: string;
    }[];
  };
  formats: {
    title: string;
    subtitle: string;
    enrollingBadge: string;
    individual: {
      title: string;
      features: string[];
      button: string;
      tag: string;
    };
    group: {
      title: string;
      features: string[];
      button: string;
      tag: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    currencyNote: string;
    group: {
      title: string;
      pricePerMonth: string;
      duration: string;
      button: string;
      features: string[];
    };
    individual: {
      title: string;
      pricePerMonth: string;
      duration: string;
      button: string;
      features: string[];
    };
  };
  teacher: {
    title: string;
    badge: string;
    bio: string;
    educationBadge: string;
    levelBadge: string;
    approachBadge: string;
    button: string;
  };
  process: {
    title: string;
    subtitle: string;
    steps: {
      num: string;
      title: string;
      desc: string;
    }[];
  };
  reviews: {
    title: string;
    subtitle: string;
    launchNoticeTitle: string;
    launchNoticeText: string;
    firstCohortPerk: string;
  };
  faq: {
    title: string;
    subtitle: string;
    items: {
      q: string;
      a: string;
    }[];
  };
  finalCta: {
    title: string;
    text: string;
    primaryButton: string;
    haveQuestions: string;
    writeUs: string;
  };
  footer: {
    desc: string;
    quickLinks: string;
    contacts: string;
    privacy: string;
    terms: string;
    adminAccess: string;
    rights: string;
  };
  form: {
    title: string;
    step1: string;
    step2: string;
    step3: string;
    forWhomLabel: string;
    forMyself: string;
    forChild: string;
    formatLabel: string;
    formatGroup: string;
    formatIndividual: string;
    formatUndecided: string;
    levelLabel: string;
    levelZero: string;
    levelBeginner: string;
    levelIntermediate: string;
    levelUnknown: string;
    goalLabel: string;
    goalSpeaking: string;
    goalWork: string;
    goalTravel: string;
    goalChild: string;
    goalStudy: string;
    goalOther: string;
    nameLabel: string;
    namePlaceholder: string;
    channelLabel: string;
    contactLabel: string;
    contactPlaceholderTelegram: string;
    contactPlaceholderWhatsApp: string;
    contactPlaceholderPhone: string;
    commentLabel: string;
    commentPlaceholder: string;
    consentText: string;
    submitButton: string;
    submitting: string;
    nextStep: string;
    prevStep: string;
    successTitle: string;
    successText: string;
    chatDirectly: string;
    closeButton: string;
  };
}

export const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: 'Главная',
      courses: 'Курсы и цены',
      formats: 'Форматы',
      teacher: 'Преподаватель',
      about: 'О школе',
      faq: 'Вопросы',
      contacts: 'Контакты',
      ctaButton: 'Подобрать занятия',
    },
    hero: {
      badge: 'Fluen · Учи язык. Полюби процесс.',
      headline: 'Английский, который становится частью твоей жизни.',
      subtitle: 'Изучай английский онлайн в комфортной атмосфере, развивай разговорные навыки и двигайся к своим целям вместе с Fluen.',
      primaryCta: 'Подобрать занятия',
      secondaryCta: 'Как проходит обучение',
      perks: {
        location: 'Онлайн из любой точки мира',
        formats: 'Индивидуально или в мини-группах',
        goals: 'С учётом твоих целей и уровня',
      },
      lessonSnippet: {
        tag: 'Интерактивный формат',
        title: 'Учимся говорить свободно',
        note: 'Без зубрежки и страха ошибок',
      },
    },
    audience: {
      title: 'Найди свой способ изучать английский',
      subtitle: 'Мы выстраиваем обучение под твои задачи и жизненный контекст, чтобы занятия приносили удовольствие и реальный результат.',
      adults: {
        title: 'Английский для взрослых',
        desc: 'Для работы, путешествий, переезда, общения и личного развития. Сфокусируемся на реальных ситуациях.',
        button: 'Мне подходит',
      },
      kids: {
        title: 'Английский для детей',
        desc: 'Занятия с учётом возраста и уровня ребёнка, с акцентом на понятное объяснение материала и живой интерес к обучению.',
        button: 'Для моего ребёнка',
      },
      zero: {
        title: 'Английский с нуля',
        desc: 'Для тех, кто хочет начать с самых основ, перестать бояться незнакомых слов и постепенно развить уверенность в языке.',
        button: 'Начать обучение',
      },
    },
    why: {
      title: 'Учиться можно по-другому',
      subtitle: 'Мы создали условия, в которых процесс изучения языка перестаёт быть рутиной и приносит искреннее вдохновение.',
      items: [
        {
          title: 'Живой английский',
          desc: 'Учим не только правилам, но и тому, как использовать язык в повседневной жизни, переписке и путешествиях.',
        },
        {
          title: 'Комфортная атмосфера',
          desc: 'Можно задавать любые вопросы, спокойно ошибаться и постепенно становиться увереннее с каждым уроком.',
        },
        {
          title: 'Современный подход',
          desc: 'Обучение с использованием актуальных материалов, аутентичных диалогов, подкастов и практических заданий.',
        },
        {
          title: 'Персональный подход',
          desc: 'Учитываем текущий уровень, профессиональные цели, интересы и комфортный темп усвоения материала.',
        },
        {
          title: 'Разговорная практика',
          desc: 'Помогаем постепенно переходить от пассивного изучения грамматики к активной и естественной речи.',
        },
        {
          title: 'Онлайн-формат',
          desc: 'Учиться можно из дома, офиса или в поездке из любого удобного места без траты времени на дорогу.',
        },
      ],
    },
    formats: {
      title: 'Выбери формат, который подходит тебе',
      subtitle: 'Гибкие форматы для любых задач: персональный фокус один на один или командная динамика в мини-группе.',
      enrollingBadge: 'Идёт набор',
      individual: {
        title: 'Индивидуальные занятия',
        tag: 'Максимальная персонализация',
        features: [
          'Персональное внимание преподавателя на протяжении всего урока',
          'Индивидуальная программа с учётом твоих конкретных целей',
          'Возможность подбирать удобный темп и график занятий',
          'Идеально подходит для подготовки к собеседованию, переезду или проектам',
        ],
        button: 'Узнать подробности',
      },
      group: {
        title: 'Мини-группы',
        tag: 'Живая разговорная динамика',
        features: [
          'Небольшое количество учеников (до 4-5 человек) для внимания каждому',
          'Постоянная практика общения и ролевых диалогов с другими участниками',
          'Совместное обучение, взаимная поддержка и высокая мотивация',
          'Более доступная стоимость обучения по сравнению с индивидуальными уроками',
        ],
        button: 'Попасть в мини-группу',
      },
    },
    pricing: {
      title: 'Понятные условия обучения',
      subtitle: 'Прозрачные стартовые цены без скрытых платежей, подписок-ловушек и искусственных скидок.',
      currencyNote: 'Указанные цены являются ориентировочными стартовыми. Расписание и точное число занятий согласуются при записи.',
      group: {
        title: 'Мини-группа',
        pricePerMonth: '160 GEL',
        duration: 'в месяц с человека',
        features: [
          '8 занятий в месяц (по 60 минут)',
          'Небольшая группа с близким уровнем',
          'Практические задания и раздаточные материалы',
          'Чат группы с преподавателем для вопросов',
        ],
        button: 'Оставить заявку в группу',
      },
      individual: {
        title: 'Индивидуальные занятия',
        pricePerMonth: 'Индивидуально',
        duration: 'подбирается под твой график',
        features: [
          'Персональный формат 1-на-1',
          'Гибкий подход к программе и материалам',
          'Любое количество занятий в неделю',
          'Стоимость уточняется в зависимости от задач и длительности',
        ],
        button: 'Обсудить индивидуальный план',
      },
    },
    teacher: {
      title: 'Твой проводник в мире английского',
      badge: 'Преподаватель школы',
      bio: 'Наш преподаватель помогает ученикам изучать английский в комфортной атмосфере, постепенно развивать разговорные навыки и увереннее использовать язык в жизни. В обучении особое внимание уделяется понятному объяснению материала, практике и индивидуальным целям ученика.',
      educationBadge: 'Высшее профильное образование',
      levelBadge: 'Подтверждённый уровень C1-C2',
      approachBadge: 'Коммуникативная бережная методика',
      button: 'Подобрать занятия с преподавателем',
    },
    process: {
      title: 'От первого сообщения до уверенного прогресса',
      subtitle: 'Простой и прозрачный путь к комфортному изучению английского языка.',
      steps: [
        {
          num: '01',
          title: 'Оставляешь заявку',
          desc: 'Рассказываешь, для кого нужны занятия (для себя или ребёнка) и какую цель хочешь достичь.',
        },
        {
          num: '02',
          title: 'Обсуждаем уровень и задачи',
          desc: 'В мессенджере или по телефону уточняем текущий опыт, пожелания и удобное время.',
        },
        {
          num: '03',
          title: 'Подбираем занятия',
          desc: 'Согласовываем подходящий формат (мини-группа или индивидуально), расписание и стоимость.',
        },
        {
          num: '04',
          title: 'Начинаем учиться',
          desc: 'Знакомимся на первом онлайн-уроке и шаг за шагом движемся к свободному владению языком.',
        },
      ],
    },
    reviews: {
      title: 'Истории наших учеников',
      subtitle: 'Честность — главный принцип Fluen. Мы только запускаем школу и открываем набор первого потока.',
      launchNoticeTitle: 'Набор первого потока Fluen открыт',
      launchNoticeText: 'Мы не придумываем фальшивые отзывы и дипломы. Сейчас мы набираем первых учеников, которые получат максимум внимания преподавателя и специальную стартовую стоимость.',
      firstCohortPerk: 'Стань одним из первых учеников и получи персональный вводный разбор целей бесплатно!',
    },
    faq: {
      title: 'Часто задаваемые вопросы',
      subtitle: 'Ответы на главные вопросы о начале обучения, форматах и организационных деталях.',
      items: [
        {
          q: 'Можно ли заниматься с нуля?',
          a: 'Да, конечно. Мы подбираем программу и темп с учётом твоего начального уровня, бережно объясняем основы и помогаем с первых же занятий преодолеть страх незнакомых слов.',
        },
        {
          q: 'Подойдут ли занятия ребёнку?',
          a: 'Да, можно оставить заявку на занятия для ребёнка. При подборе формата мы уточняем возраст, уровень и цели — школьная программа, живое общение или подготовка к переезду.',
        },
        {
          q: 'Можно ли заниматься индивидуально?',
          a: 'Да, в нашей школе предусмотрены как индивидуальные занятия 1-на-1, так и набор в мини-группы. Формат можно выбрать в заявке.',
        },
        {
          q: 'Как проходят занятия?',
          a: 'Все уроки проходят онлайн в удобной видеоплатформе с интерактивной доской и современными материалами. Нужен только ноутбук, планшет или смартфон со стабильным интернетом.',
        },
        {
          q: 'Как узнать стоимость?',
          a: 'Стартовая стоимость для мини-групп составляет ориентировочно 160 GEL в месяц (8 занятий). Для индивидуальных занятий стоимость уточняется в зависимости от длительности и интенсивности.',
        },
        {
          q: 'Как записаться?',
          a: 'Оставь заявку через форму на сайте или напиши нам напрямую в Telegram или WhatsApp — мы ответим в течение пары часов и поможем выбрать формат.',
        },
        {
          q: 'Можно ли сначала познакомиться с преподавателем?',
          a: 'Да, мы с радостью организуем короткое онлайн-знакомство или вводную беседу, чтобы обсудить цели, определить уровень и убедиться, что вам комфортно друг с другом.',
        },
      ],
    },
    finalCta: {
      title: 'Твой английский начинается здесь',
      text: 'Расскажи нам о своей цели — и мы поможем подобрать подходящий формат занятий без лишнего стресса.',
      primaryButton: 'Подобрать занятия',
      haveQuestions: 'Есть вопросы перед стартом?',
      writeUs: 'Напиши нам в мессенджер',
    },
    footer: {
      desc: 'Современная онлайн-школа иностранных языков. Помогаем свободно говорить и любить процесс обучения.',
      quickLinks: 'Навигация',
      contacts: 'Контакты',
      privacy: 'Политика конфиденциальности',
      terms: 'Условия обработки данных',
      adminAccess: 'Управление школой',
      rights: 'Все права защищены.',
    },
    form: {
      title: 'Давай подберём тебе занятия',
      step1: 'Шаг 1: Формат обучения',
      step2: 'Шаг 2: Уровень и цели',
      step3: 'Шаг 3: Контакты для связи',
      forWhomLabel: 'Для кого нужны занятия?',
      forMyself: 'Для меня',
      forChild: 'Для ребёнка',
      formatLabel: 'Какой формат интересует?',
      formatGroup: 'Мини-группа',
      formatIndividual: 'Индивидуально',
      formatUndecided: 'Пока не знаю, посоветуйте',
      levelLabel: 'Какой у тебя текущий уровень?',
      levelZero: 'С нуля (совсем ничего не помню)',
      levelBeginner: 'Начальный (A1-A2, знаю отдельные слова)',
      levelIntermediate: 'Средний (B1-B2, могу читать, но трудно говорить)',
      levelUnknown: 'Не знаю, нужно определить',
      goalLabel: 'Какая главная цель обучения?',
      goalSpeaking: 'Разговорный английский для жизни',
      goalWork: 'Для работы и карьеры',
      goalTravel: 'Для путешествий и переезда',
      goalChild: 'Помощь ребёнку с языком',
      goalStudy: 'Для учёбы и экзаменов',
      goalOther: 'Другая цель',
      nameLabel: 'Как к тебе обращаться?',
      namePlaceholder: 'Например, Анна',
      channelLabel: 'Где удобнее связаться?',
      contactLabel: 'Контакт для связи',
      contactPlaceholderTelegram: '@username или номер телефона',
      contactPlaceholderWhatsApp: '+995 ... или ваш номер WhatsApp',
      contactPlaceholderPhone: '+995 ... или номер телефона',
      commentLabel: 'Пожелания или комментарий (необязательно)',
      commentPlaceholder: 'Например: удобны вечера в будни, хочу сделать акцент на разговорной практике...',
      consentText: 'Нажимая кнопку, вы соглашаетесь на обработку персональных данных для связи с вами.',
      submitButton: 'Отправить заявку',
      submitting: 'Отправляем заявку...',
      nextStep: 'Далее',
      prevStep: 'Назад',
      successTitle: 'Спасибо за заявку! 💙',
      successText: 'Мы получили твоё сообщение и свяжемся с тобой в ближайшее время, чтобы обсудить подходящий формат обучения.',
      chatDirectly: 'Или напиши нам прямо сейчас в Telegram:',
      closeButton: 'Отлично, спасибо',
    },
  },
  en: {
    nav: {
      home: 'Home',
      courses: 'Courses & Pricing',
      formats: 'Formats',
      teacher: 'Teacher',
      about: 'About',
      faq: 'FAQ',
      contacts: 'Contact',
      ctaButton: 'Find My Course',
    },
    hero: {
      badge: 'Fluen · Learn the language. Love the process.',
      headline: 'English that becomes a natural part of your life.',
      subtitle: 'Learn English online in a welcoming atmosphere, develop fluent speaking skills, and achieve your goals with Fluen.',
      primaryCta: 'Find My Course',
      secondaryCta: 'How It Works',
      perks: {
        location: 'Online from anywhere in the world',
        formats: '1-on-1 or small groups',
        goals: 'Tailored to your goals and pace',
      },
      lessonSnippet: {
        tag: 'Interactive Lessons',
        title: 'Speak with confidence',
        note: 'Zero fear of mistakes, pure practice',
      },
    },
    audience: {
      title: 'Find your way to master English',
      subtitle: 'We shape the learning experience around your personal context so studying feels natural and rewarding.',
      adults: {
        title: 'English for Adults',
        desc: 'For career, travel, relocation, and everyday communication. Focused on real-life conversations.',
        button: 'Fits Me Best',
      },
      kids: {
        title: 'English for Children',
        desc: 'Age-appropriate lessons with clear explanations, playful engagement, and genuine curiosity.',
        button: 'For My Child',
      },
      zero: {
        title: 'English from Scratch',
        desc: 'For beginners who want a supportive start, building confidence step-by-step from the fundamentals.',
        button: 'Start from Scratch',
      },
    },
    why: {
      title: 'Learning can feel completely different',
      subtitle: 'We created an environment where language learning ceases to be a chore and becomes an inspiring habit.',
      items: [
        {
          title: 'Authentic English',
          desc: 'We focus on practical, everyday English rather than dry textbook memorization.',
        },
        {
          title: 'Comfortable Atmosphere',
          desc: 'Ask any questions, make mistakes freely, and grow confident with each session.',
        },
        {
          title: 'Modern Approach',
          desc: 'Engaging real-world articles, podcasts, video clips, and interactive exercises.',
        },
        {
          title: 'Personalized Focus',
          desc: 'Every student’s pace, career goals, and personal interests guide the curriculum.',
        },
        {
          title: 'Active Speaking Practice',
          desc: 'Transition from passive grammar knowledge to active, natural verbal fluency.',
        },
        {
          title: '100% Online Convenience',
          desc: 'Join lessons from home, office, or while traveling without wasting time in traffic.',
        },
      ],
    },
    formats: {
      title: 'Choose the format that suits you',
      subtitle: 'Flexible formats designed for your lifestyle: private coaching or small group collaboration.',
      enrollingBadge: 'Enrolling Now',
      individual: {
        title: '1-on-1 Private Lessons',
        tag: 'Maximum Personalization',
        features: [
          'Full dedicated tutor attention throughout every lesson',
          'Curriculum customized strictly around your specific targets',
          'Flexible scheduling and personalized pace',
          'Perfect for interview preparation, relocation, or fast progress',
        ],
        button: 'Explore Private Lessons',
      },
      group: {
        title: 'Mini-Groups',
        tag: 'Collaborative Speaking',
        features: [
          'Small groups (up to 4-5 students) so everyone speaks plenty',
          'Real conversational dialogue practice with peers',
          'Mutual encouragement, team energy, and shared progress',
          'More affordable pricing compared to private tutoring',
        ],
        button: 'Join a Mini-Group',
      },
    },
    pricing: {
      title: 'Clear & Transparent Pricing',
      subtitle: 'Honest starting prices with no hidden fees, locked subscriptions, or fake countdown timers.',
      currencyNote: 'Prices are shown in GEL. Schedule and exact lesson volume are confirmed upon consultation.',
      group: {
        title: 'Mini-Group',
        pricePerMonth: '160 GEL',
        duration: 'per month per student',
        features: [
          '8 lessons per month (60 mins each)',
          'Matched by English proficiency level',
          'Interactive assignments and curated study materials',
          'Dedicated group chat with the teacher',
        ],
        button: 'Apply for Mini-Group',
      },
      individual: {
        title: 'Individual Lessons',
        pricePerMonth: 'Custom',
        duration: 'tailored to your schedule',
        features: [
          '1-on-1 private tutoring',
          'Completely bespoke curriculum',
          'Flexible frequency per week',
          'Pricing depends on session duration and goals',
        ],
        button: 'Discuss Private Plan',
      },
    },
    teacher: {
      title: 'Your Guide to English Fluency',
      badge: 'Fluen Instructor',
      bio: 'Our instructor guides learners through a friendly, low-stress environment, steadily cultivating speaking confidence and practical language skills. Each session emphasizes clear explanations, real-life dialogue, and individual student goals.',
      educationBadge: 'Certified Linguistics Degree',
      levelBadge: 'Verified C1-C2 Proficiency',
      approachBadge: 'Communicative Methodology',
      button: 'Meet the Teacher',
    },
    process: {
      title: 'From First Message to Confident Progress',
      subtitle: 'A straightforward, transparent path to mastering English.',
      steps: [
        {
          num: '01',
          title: 'Submit an Application',
          desc: 'Tell us who the lessons are for and what primary goals you want to achieve.',
        },
        {
          num: '02',
          title: 'Discuss Goals & Level',
          desc: 'We connect via chat or call to clarify your background, schedule, and preferences.',
        },
        {
          num: '03',
          title: 'Choose the Right Format',
          desc: 'We agree on 1-on-1 lessons or a mini-group, finalize timing, and confirm details.',
        },
        {
          num: '04',
          title: 'Start Learning',
          desc: 'Meet your tutor online and take confident steps toward natural fluency.',
        },
      ],
    },
    reviews: {
      title: 'Student Stories',
      subtitle: 'Honesty is at the heart of Fluen. We are launching our very first cohort.',
      launchNoticeTitle: 'First Enrollment Cohort Now Open',
      launchNoticeText: 'We do not invent fabricated reviews or stock testimonials. We are currently welcoming our founding students who will receive premier teacher attention and early pricing.',
      firstCohortPerk: 'Join our first cohort and receive a complimentary introductory goals consultation!',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about getting started, schedules, and lesson formats.',
      items: [
        {
          q: 'Can I start with zero knowledge?',
          a: 'Yes, absolutely. We tailor the pace to true beginners, gently introducing foundational concepts so you feel comfortable from day one.',
        },
        {
          q: 'Are lessons suitable for children?',
          a: 'Yes! You can apply for lessons for your child. We take age, school curriculum, and interests into account to keep learning engaging.',
        },
        {
          q: 'Can I study one-on-one?',
          a: 'Yes, we offer both dedicated 1-on-1 lessons and collaborative mini-groups. You can select your preference in the form.',
        },
        {
          q: 'How do online lessons take place?',
          a: 'Lessons are conducted via interactive video platforms with collaborative whiteboards and digital materials. All you need is a laptop or tablet.',
        },
        {
          q: 'How much does it cost?',
          a: 'The starting rate for mini-groups is 160 GEL per month (8 lessons). Individual rates are tailored based on lesson frequency and targets.',
        },
        {
          q: 'How do I sign up?',
          a: 'Fill out the short form on this page or message us directly on Telegram or WhatsApp. We will reply promptly.',
        },
        {
          q: 'Can I meet the tutor first?',
          a: 'Yes, we gladly arrange a brief introductory call to discuss goals and ensure a great mutual match.',
        },
      ],
    },
    finalCta: {
      title: 'Your English Journey Begins Here',
      text: 'Tell us about your goal and we will help you find the right learning path without friction.',
      primaryButton: 'Find My Course',
      haveQuestions: 'Have questions before starting?',
      writeUs: 'Message us directly',
    },
    footer: {
      desc: 'Modern online language school. Helping you speak fluently and love the learning process.',
      quickLinks: 'Navigation',
      contacts: 'Contacts',
      privacy: 'Privacy Policy',
      terms: 'Data Processing Terms',
      adminAccess: 'School Management',
      rights: 'All rights reserved.',
    },
    form: {
      title: 'Let’s Find Your Ideal English Course',
      step1: 'Step 1: Learning Format',
      step2: 'Step 2: Level & Goals',
      step3: 'Step 3: Contact Info',
      forWhomLabel: 'Who are the lessons for?',
      forMyself: 'For myself',
      forChild: 'For my child',
      formatLabel: 'What format do you prefer?',
      formatGroup: 'Mini-group',
      formatIndividual: '1-on-1 Lessons',
      formatUndecided: 'Not sure yet, advise me',
      levelLabel: 'What is your current English level?',
      levelZero: 'From scratch (complete beginner)',
      levelBeginner: 'Elementary (A1-A2, know basic words)',
      levelIntermediate: 'Intermediate (B1-B2, read well, shy to speak)',
      levelUnknown: 'Not sure, need assessment',
      goalLabel: 'What is your main goal?',
      goalSpeaking: 'Speaking fluency for everyday life',
      goalWork: 'Career and business',
      goalTravel: 'Travel and relocation',
      goalChild: 'Helping my child with English',
      goalStudy: 'Academic studies & tests',
      goalOther: 'Other personal goal',
      nameLabel: 'What should we call you?',
      namePlaceholder: 'e.g. Alex',
      channelLabel: 'Preferred communication method',
      contactLabel: 'Your contact handle or number',
      contactPlaceholderTelegram: '@username or phone number',
      contactPlaceholderWhatsApp: '+995 ... or your WhatsApp number',
      contactPlaceholderPhone: '+995 ... or phone number',
      commentLabel: 'Any notes or schedule preferences (optional)',
      commentPlaceholder: 'e.g. Weekday evenings work best, want emphasis on conversational speech...',
      consentText: 'By submitting, you agree to personal data processing for consultation purposes.',
      submitButton: 'Submit Application',
      submitting: 'Submitting application...',
      nextStep: 'Next',
      prevStep: 'Back',
      successTitle: 'Thank you for your application! 💙',
      successText: 'We have received your message and will contact you shortly to match the ideal learning format.',
      chatDirectly: 'Or chat with us right now on Telegram:',
      closeButton: 'Got it, thanks',
    },
  },
  ka: {
    nav: {
      home: 'მთავარი',
      courses: 'კურსები და ფასები',
      formats: 'ფორმატები',
      teacher: 'მასწავლებელი',
      about: 'სკოლის შესახებ',
      faq: 'კითხვები',
      contacts: 'კონტაქტი',
      ctaButton: 'კურსის შერჩევა',
    },
    hero: {
      badge: 'Fluen · ისწავლე ენა. შეიყვარე პროცესი.',
      headline: 'ინგლისური, რომელიც შენი ცხოვრების ნაწილი ხდება.',
      subtitle: 'ისწავლე ინგლისური ონლაინ კომფორტულ გარემოში, განივითარე სასაუბრო უნარები და მიაღწიე შენს მიზნებს Fluen-თან ერთად.',
      primaryCta: 'კურსის შერჩევა',
      secondaryCta: 'როგორ მიმდინარეობს სწავლა',
      perks: {
        location: 'ონლაინ მსოფლიოს ნებისმიერი წერტილიდან',
        formats: 'ინდივიდუალურად ან მინი-ჯგუფებში',
        goals: 'შენი მიზნებისა და დონის გათვალისწინებით',
      },
      lessonSnippet: {
        tag: 'ინტერაქტიული ფორმატი',
        title: 'ისაუბრე თავისუფლად',
        note: 'შეცდომების შიშის გარეშე',
      },
    },
    audience: {
      title: 'იპოვე შენი გზა ინგლისურის შესასწავლად',
      subtitle: 'სწავლებას ვარგებთ შენს პირად მიზნებს, რათა პროცესი იყოს სასიამოვნო და შედეგიანი.',
      adults: {
        title: 'ინგლისური უფროსებისთვის',
        desc: 'სამსახურისთვის, მოგზაურობისთვის, საზღვარგარეთ გადასასვლელად და ყოველდღიური კომუნიკაციისთვის.',
        button: 'მომწონს ეს ფორმატი',
      },
      kids: {
        title: 'ინგლისური ბავშვებისთვის',
        desc: 'ასაკზე მორგებული გაკვეთილები, მასალის მარტივი ახსნა და ინტერესის გაღვივება.',
        button: 'ჩემი შვილისთვის',
      },
      zero: {
        title: 'ინგლისური ნულიდან',
        desc: 'მათთვის, ვისაც სურს საწყისებიდან დაწყება და ეტაპობრივად თავდაჯერებულობის მოპოვება.',
        button: 'ნულიდან დაწყება',
      },
    },
    why: {
      title: 'სწავლა შეიძლება იყოს სხვანაირი',
      subtitle: 'შევქმენით გარემო, სადაც ენის სწავლა აღარ არის მოსაწყენი ვალდებულება და ხდება საინტერესო პროცესი.',
      items: [
        {
          title: 'ცოცხალი ინგლისური',
          desc: 'ვასწავლით არა მხოლოდ წესებს, არამედ ენის რეალურ გამოყენებას ყოველდღიურ ცხოვრებაში.',
        },
        {
          title: 'კომფორტული გარემო',
          desc: 'შეგიძლია თავისუფლად დასვა კითხვები, დაუშვა შეცდომები და ეტაპობრივად გაიუმჯობესო მეტყველება.',
        },
        {
          title: 'თანამედროვე მიდგომა',
          desc: 'სწავლება აქტუალური მასალებით, დიალოგებით, პოდკასტებითა და პრაქტიკული დავალებებით.',
        },
        {
          title: 'პერსონალური მიდგომა',
          desc: 'ვითვალისწინებთ შენს დონეს, პროფესიულ მიზნებს, ინტერესებსა და სასწავლო ტემპს.',
        },
        {
          title: 'სასაუბრო პრაქტიკა',
          desc: 'გეხმარებით გრამატიკის პასიური ცოდნიდან გადახვიდე თავისუფალ და ბუნებრივ საუბარზე.',
        },
        {
          title: 'ონლაინ ფორმატი',
          desc: 'სწავლა შეგიძლია სახლიდან, ოფისიდან ან მოგზაურობიდან გზაში დროის დაკარგვის გარეშე.',
        },
      ],
    },
    formats: {
      title: 'აირჩიე შენთვის შესაფერისი ფორმატი',
      subtitle: 'მოქნილი ფორმატები: ინდივიდუალური ყურადღება ან გუნდური დინამიკა მინი-ჯგუფში.',
      enrollingBadge: 'მიმდინარეობს მიღება',
      individual: {
        title: 'ინდივიდუალური გაკვეთილები',
        tag: 'მაქსიმალური პერსონალიზაცია',
        features: [
          'მასწავლებლის სრული ყურადღება გაკვეთილის განმავლობაში',
          'პერსონალური სასწავლო პროგრამა შენი მიზნების მიხედვით',
          'მოსახერხებელი გრაფიკისა და ტემპის შერჩევა',
          'იდეალურია გასაუბრებისთვის ან სწრაფი პროგრესისთვის',
        ],
        button: 'დეტალების გაგება',
      },
      group: {
        title: 'მინი-ჯგუფები',
        tag: 'ცოცხალი კომუნიკაცია',
        features: [
          'მოსწავლეთა მცირე რაოდენობა (4-5 ადამიანი) თითოეულზე ყურადღებისთვის',
          'მუდმივი სასაუბრო პრაქტიკა და დიალოგები ჯგუფის წევრებთან',
          'ერთობლივი სწავლა, ურთიერთმხარდაჭერა და მოტივაცია',
          'უფრო ხელმისაწვდომი ფასი ინდივიდუალურ გაკვეთილებთან შედარებით',
        ],
        button: 'მინი-ჯგუფში ჩაწერა',
      },
    },
    pricing: {
      title: 'გამჭვირვალე პირობები',
      subtitle: 'რეალური სასტარტო ფასები ფარული გადასახადებისა და მოჩვენებითი ფასდაკლებების გარეშე.',
      currencyNote: 'ფასები მოცემულია ლარში (GEL). საბოლოო განრიგი ზუსტდება რეგისტრაციისას.',
      group: {
        title: 'მინი-ჯგუფი',
        pricePerMonth: '160 GEL',
        duration: 'თვეში თითო მოსწავლეზე',
        features: [
          '8 გაკვეთილი თვეში (თითო 60 წუთი)',
          'მცირე ჯგუფი მსგავსი დონის მოსწავლეებით',
          'პრაქტიკული დავალებები და თანამედროვე მასალები',
          'ჯგუფური ჩატი მასწავლებელთან კითხვებისთვის',
        ],
        button: 'განაცხადის დატოვება ჯგუფში',
      },
      individual: {
        title: 'ინდივიდუალური გაკვეთილები',
        pricePerMonth: 'ინდივიდუალური',
        duration: 'ირჩევა შენი გრაფიკის მიხედვით',
        features: [
          'პერსონალური 1-on-1 ფორმატი',
          'მოქნილი პროგრამა და მასალები',
          'კვირაში გაკვეთილების სასურველი რაოდენობა',
          'ფასი ზუსტდება ხანგრძლივობისა და მიზნების მიხედვით',
        ],
        button: 'ინდივიდუალური გეგმის განხილვა',
      },
    },
    teacher: {
      title: 'შენი მეგზური ინგლისურის სამყაროში',
      badge: 'Fluen-ის მასწავლებელი',
      bio: 'ჩვენი პედაგოგი ეხმარება მოსწავლეებს კომფორტულ გარემოში ისწავლონ ინგლისური, ეტაპობრივად განავითარონ სასაუბრო უნარები და თავდაჯერებულად გამოიყენონ ენა. განსაკუთრებული ყურადღება ეთმობა მარტივ ახსნას, პრაქტიკასა და მოსწავლის ინდივიდუალურ მიზნებს.',
      educationBadge: 'უმაღლესი ენათმეცნიერული განათლება',
      levelBadge: 'დადასტურებული დონე C1-C2',
      approachBadge: 'კომუნიკაციური მეგობრული მეთოდიკა',
      button: 'მასწავლებელთან ჩაწერა',
    },
    process: {
      title: 'პირველი შეტყობინებიდან თავისუფალ მეტყველებამდე',
      subtitle: 'მარტივი და გასაგები გზა ინგლისურის შესასწავლად.',
      steps: [
        {
          num: '01',
          title: 'ტოვებ განაცხადს',
          desc: 'გვიყვები, ვისთვის არის გაკვეთილები და რა მიზნის მიღწევა გსურს.',
        },
        {
          num: '02',
          title: 'განვიხილავთ დონესა და ამოცანებს',
          desc: 'მესენჯერში ან ზარით ვაზუსტებთ გამოცდილებას, სურვილებსა და მოსახერხებელ დროს.',
        },
        {
          num: '03',
          title: 'ვარჩევთ ფორმატს',
          desc: 'ვათანხმებთ ფორმატს (მინი-ჯგუფი თუ ინდივიდუალური), განრიგსა და ღირებულებას.',
        },
        {
          num: '04',
          title: 'ვიწყებთ სწავლას',
          desc: 'პირველ ონლაინ გაკვეთილზე ვეცნობით ერთმანეთს და ნაბიჯ-ნაბიჯ მივდივართ მიზნისკენ.',
        },
      ],
    },
    reviews: {
      title: 'ჩვენი მოსწავლეების ისტორიები',
      subtitle: 'სიმართლე Fluen-ის მთავარი პრინციპია. ჩვენ ახლა ვიწყებთ პირველი ნაკადის მიღებას.',
      launchNoticeTitle: 'პირველი ნაკადის მიღება გახსნილია',
      launchNoticeText: 'ჩვენ არ ვიგონებთ გამოგონილ შეფასებებს. ახლა ვიღებთ პირველ მოსწავლეებს, რომლებიც მიიღებენ პედაგოგის მაქსიმალურ ყურადღებასა და სპეციალურ სასტარტო ფასს.',
      firstCohortPerk: 'გახდი პირველი მოსწავლე და მიიღე მიზნების უფასო გაცნობითი კონსულტაცია!',
    },
    faq: {
      title: 'ხშირად დასმული კითხვები',
      subtitle: 'პასუხები ყველაზე მნიშვნელოვან კითხვებზე სწავლის დაწყებისა და ორგანიზების შესახებ.',
      items: [
        {
          q: 'შეიძლება სწავლის დაწყება ნულიდან?',
          a: 'დიახ, რა თქმა უნდა. პროგრამას და ტემპს ვარჩევთ შენი საწყისი დონის მიხედვით, მარტივად ვხსნით საფუძვლებს და თავიდანვე გეხმარებით შიშის გადალახვაში.',
        },
        {
          q: 'გამოდგება გაკვეთილები ბავშვისთვის?',
          a: 'დიახ, შეგიძლიათ დატოვოთ განაცხადი ბავშვისთვის. ფორმატის შერჩევისას ვაზუსტებთ ასაკს, დონესა და მიზნებს.',
        },
        {
          q: 'შესაძლებელია ინდივიდუალურად სწავლა?',
          a: 'დიახ, გვაქვს როგორც ინდივიდუალური 1-on-1 გაკვეთილები, ისე მინი-ჯგუფები. ფორმატს ირჩევთ თქვენ.',
        },
        {
          q: 'როგორ ტარდება გაკვეთილები?',
          a: 'ყველა გაკვეთილი ტარდება ონლაინ ვიდეო პლატფორმით, ინტერაქტიული დაფითა და თანამედროვე მასალებით.',
        },
        {
          q: 'როგორ გავიგო ღირებულება?',
          a: 'მინი-ჯგუფების სასტარტო ღირებულება შეადგენს 160 ლარს თვეში (8 გაკვეთილი). ინდივიდუალური გაკვეთილების ფასი ზუსტდება ინტენსივობის მიხედვით.',
        },
        {
          q: 'როგორ ჩავეწერო?',
          a: 'დატოვეთ განაცხადი საიტზე არსებული ფორმით ან მოგვწერეთ პირდაპირ Telegram-ში ან WhatsApp-ში.',
        },
        {
          q: 'შეიძლება ჯერ პედაგოგის გაცნობა?',
          a: 'დიახ, სიამოვნებით მოვაწყობთ მოკლე ონლაინ გაცნობას, რათა ვისაუბროთ მიზნებზე და განვსაზღვროთ დონე.',
        },
      ],
    },
    finalCta: {
      title: 'შენი ინგლისური იწყება აქ',
      text: 'გვითხარი შენი მიზნის შესახებ და ჩვენ დაგეხმარებით შესაფერისი ფორმატის შერჩევაში.',
      primaryButton: 'კურსის შერჩევა',
      haveQuestions: 'გაქვს კითხვები დაწყებამდე?',
      writeUs: 'მოგვწერე მესენჯერში',
    },
    footer: {
      desc: 'უცხო ენების თანამედროვე ონლაინ სკოლა. გეხმარებით თავისუფლად ისაუბროთ და შეიყვაროთ სწავლის პროცესი.',
      quickLinks: 'ნავიგაცია',
      contacts: 'კონტაქტი',
      privacy: 'კონფიდენციალურობის პოლიტიკა',
      terms: 'მონაცემთა დამუშავების პირობები',
      adminAccess: 'სკოლის მართვა',
      rights: 'ყველა უფლება დაცულია.',
    },
    form: {
      title: 'მოდი შევარჩიოთ შენთვის შესაფერისი გაკვეთილები',
      step1: 'ნაბიჯი 1: სწავლის ფორმატი',
      step2: 'ნაბიჯი 2: დონე და მიზნები',
      step3: 'ნაბიჯი 3: საკონტაქტო მონაცემები',
      forWhomLabel: 'ვისთვის გჭირდებათ გაკვეთილები?',
      forMyself: 'ჩემთვის',
      forChild: 'ბავშვისთვის',
      formatLabel: 'რომელი ფორმატი გაინტერესებთ?',
      formatGroup: 'მინი-ჯგუფი',
      formatIndividual: 'ინდივიდუალური',
      formatUndecided: 'ჯერ არ ვიცი, მირჩიეთ',
      levelLabel: 'როგორია შენი ამჟამინდელი დონე?',
      levelZero: 'ნულიდან (არაფერი მახსოვს)',
      levelBeginner: 'საწყისი (A1-A2, ვიცი ცალკეული სიტყვები)',
      levelIntermediate: 'საშუალო (B1-B2, ვკითხულობ, მაგრამ მიჭირს საუბარი)',
      levelUnknown: 'არ ვიცი, საჭიროა განსაზღვრა',
      goalLabel: 'რა არის სწავლის მთავარი მიზანი?',
      goalSpeaking: 'სასაუბრო ინგლისური ცხოვრებისთვის',
      goalWork: 'სამსახურისა და კარიერისთვის',
      goalTravel: 'მოგზაურობისა და გადასვლისთვის',
      goalChild: 'ბავშვის დახმარება ენაში',
      goalStudy: 'სწავლისა და გამოცდებისთვის',
      goalOther: 'სხვა პირადი მიზანი',
      nameLabel: 'როგორ მოგმართოთ?',
      namePlaceholder: 'მაგალითად, ნინო',
      channelLabel: 'სად უფრო მოსახერხებელია დაკავშირება?',
      contactLabel: 'საკონტაქტო ნომერი ან იუზერნეიმი',
      contactPlaceholderTelegram: '@username ან ტელეფონის ნომერი',
      contactPlaceholderWhatsApp: '+995 ... ან WhatsApp ნომერი',
      contactPlaceholderPhone: '+995 ... ან ტელეფონის ნომერი',
      commentLabel: 'სურვილები ან კომენტარი (სურვილისამებრ)',
      commentPlaceholder: 'მაგალითად: მირჩევნია საღამოს საათები, მსურს აქცენტი საუბარზე...',
      consentText: 'ღილაკზე დაჭერით ეთანხმებით პერსონალური მონაცემების დამუშავებას.',
      submitButton: 'განაცხადის გაგზავნა',
      submitting: 'იგზავნება...',
      nextStep: 'შემდეგი',
      prevStep: 'უკან',
      successTitle: 'მადლობა განაცხადისთვის! 💙',
      successText: 'ჩვენ მივიღეთ თქვენი შეტყობინება და მალე დაგიკავშირდებით სწავლის ფორმატის განსახილველად.',
      chatDirectly: 'ან მოგვწერეთ პირდაპირ Telegram-ში:',
      closeButton: 'გასაგებია, მადლობა',
    },
  },
};
