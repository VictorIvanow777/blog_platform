db = db.getSiblingDB('blog_platform_21308');

// Insert users
// Добавяне на потребители с различни роли, статуси и социални профили
db.users.insertMany([
  {
    username: "healthy_anna",
    full_name: "Anna Petrova",
    email: "anna@healthlife.com",
    role: "author",
    is_active: true,
    social_links: {
      twitter: "https://twitter.com/healthy_anna"
    }
  },
  {
    username: "fit_john",
    full_name: "John Smith",
    email: "john@fitnessworld.com",
    role: "author",
    is_active: true,
    social_links: {
      facebook: "https://facebook.com/fit_john"
    }
  },
  {
    username: "reader_maria",
    full_name: "Maria Ivanova",
    email: "maria@readersclub.com",
    role: "reader",
    is_active: true,
    social_links: {}
  },
  {
    username: "wellness_mark",
    full_name: "Mark Johnson",
    email: "mark@wellnesslife.com",
    role: "editor",
    is_active: true,
    social_links: {
      twitter: "https://twitter.com/wellness_mark"
    }
  },
  {
    username: "inactive_sam",
    full_name: "Sam Taylor",
    email: "sam@inactive.com",
    role: "author",
    is_active: false,
    social_links: {}
  }
]);

// Insert categories
// Създаване на основните категории в блога
db.categories.insertMany([
  {
    slug: "nutrition",
    name: "Nutrition",
    description: "Всичко за здравословното хранене и диети.",
    post_count: 0
  },
  {
    slug: "fitness",
    name: "Fitness",
    description: "Съвети за тренировки и фитнес програми.",
    post_count: 0
  },
  {
    slug: "mental_health",
    name: "Mental Health",
    description: "Психично здраве и благополучие.",
    post_count: 0
  },
  {
    slug: "wellness",
    name: "Wellness",
    description: "Обща грижа за тялото и ума.",
    post_count: 0
  }
]);

// Insert tags
// Добавяне на различни тагове за маркиране на постове
db.tags.insertMany([
  { name: "Healthy Eating" },
  { name: "Workout" },
  { name: "Meditation" },
  { name: "Vitamins" },
  { name: "Cardio" },
  { name: "Mindfulness" },
  { name: "Yoga" },
  { name: "Supplements" }
]);

// Insert posts
// Публикации с различен статус и автори
db.posts.insertMany([
  {
    slug: "healthy-breakfast-ideas",
    title: "Healthy Breakfast Ideas",
    author: "healthy_anna",
    categories: ["nutrition"],
    tags: ["Healthy Eating", "Vitamins"],
    status: "published",
    published_at: new Date("2025-01-15"),
    view_count: 350,
    comment_count: 2,
    content: "Start your day with these easy healthy breakfast recipes..."
  },
  {
    slug: "benefits-of-running",
    title: "Benefits of Running",
    author: "fit_john",
    categories: ["fitness"],
    tags: ["Workout", "Cardio"],
    status: "draft",
    published_at: null,
    view_count: 0,
    comment_count: 0,
    content: "Running is one of the best cardiovascular workouts..."
  },
  {
    slug: "meditation-for-beginners",
    title: "Meditation for Beginners",
    author: "wellness_mark",
    categories: ["mental_health", "wellness"],
    tags: ["Meditation", "Mindfulness"],
    status: "published",
    published_at: new Date("2025-02-10"),
    view_count: 220,
    comment_count: 1,
    content: "Learn how to meditate with simple techniques for beginners."
  },
  {
    slug: "yoga-benefits",
    title: "Yoga Benefits",
    author: "healthy_anna",
    categories: ["fitness", "wellness"],
    tags: ["Yoga", "Mindfulness"],
    status: "published",
    published_at: new Date("2025-03-01"),
    view_count: 180,
    comment_count: 0,
    content: "Yoga improves flexibility, strength, and mental clarity."
  }
]);

// Insert comments
// Коментари към постовете със статус и броя на харесванията
db.comments.insertMany([
  {
    post_slug: "healthy-breakfast-ideas",
    author: "reader_maria",
    content: "Great tips! I tried the avocado toast and loved it.",
    status: "approved",
    likes: 5,
    created_at: new Date("2025-01-16")
  },
  {
    post_slug: "healthy-breakfast-ideas",
    author: "fit_john",
    content: "Adding eggs to breakfast is a good protein source.",
    status: "approved",
    likes: 3,
    created_at: new Date("2025-01-17")
  },
  {
    post_slug: "meditation-for-beginners",
    author: "healthy_anna",
    content: "Meditation really helped me focus better during the day.",
    status: "approved",
    likes: 4,
    created_at: new Date("2025-02-11")
  }
]);

// Обнови броя на постове във всяка категория
db.categories.updateOne(
  { slug: "nutrition" },
  { $set: { post_count: db.posts.countDocuments({ categories: "nutrition" }) } }
);
db.categories.updateOne(
  { slug: "fitness" },
  { $set: { post_count: db.posts.countDocuments({ categories: "fitness" }) } }
);
db.categories.updateOne(
  { slug: "mental_health" },
  { $set: { post_count: db.posts.countDocuments({ categories: "mental_health" }) } }
);
db.categories.updateOne(
  { slug: "wellness" },
  { $set: { post_count: db.posts.countDocuments({ categories: "wellness" }) } }
);
