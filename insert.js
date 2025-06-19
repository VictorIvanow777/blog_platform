db = db.getSiblingDB('blog_platform_21308');

db.users.drop();
db.categories.drop();
db.tags.drop();
db.posts.drop();
db.comments.drop();

db.users.insertMany([
  { username: "healthy_anna", full_name: "Анна Иванова", email: "anna@example.com", role: "author", is_active: true, social_links: { twitter: "@healthy_anna", instagram: "healthy.anna" } },
  { username: "fit_martin", full_name: "Мартин Петров", email: "martin@example.com", role: "author", is_active: true, social_links: { instagram: "fit.martin" } },
  { username: "editor_nina", full_name: "Нина Георгиева", email: "nina@example.com", role: "editor", is_active: true },
  { username: "wellness_john", full_name: "John Wellness", email: "john@example.com", role: "author", is_active: false, social_links: { twitter: "@johnwellness" } },
  { username: "nutrition_expert", full_name: "Д-р Петрова", email: "petrova@example.com", role: "author", is_active: true },
  { username: "yoga_master", full_name: "Йога Майстор", email: "yoga@example.com", role: "author", is_active: true, social_links: { instagram: "yoga.master" } },
  { username: "runner_tom", full_name: "Tom Runner", email: "tom@example.com", role: "author", is_active: true },
  { username: "meditation_guide", full_name: "Гидия Медитация", email: "meditation@example.com", role: "author", is_active: true },
  { username: "guest_writer", full_name: "Гост Писател", email: "guest@example.com", role: "guest", is_active: true }
]);

db.categories.insertMany([
  { slug: "nutrition", name: "Хранене", description: "Съвети и рецепти за здравословно хранене", post_count: 3 },
  { slug: "exercise", name: "Упражнения", description: "Програми и съвети за физическа активност", post_count: 4 },
  { slug: "mental_health", name: "Психично здраве", description: "Темите свързани с психичното здраве", post_count: 2 },
  { slug: "wellness", name: "Уелнес", description: "Обща тема за здраве и благополучие", post_count: 1 },
  { slug: "recipes", name: "Рецепти", description: "Здравословни и вкусни рецепти", post_count: 2 }
]);

db.tags.insertMany([
  { name: "Wellness" },
  { name: "Diet" },
  { name: "Yoga" },
  { name: "Meditation" },
  { name: "Running" },
  { name: "Fitness" },
  { name: "Healthy Recipes" },
  { name: "Mental Health" },
  { name: "Exercise" }
]);

db.posts.insertMany([
  {
    slug: "healthy-breakfast-ideas",
    title: "Идеи за здравословна закуска",
    author: "healthy_anna",
    categories: ["nutrition", "recipes"],
    tags: ["Wellness", "Diet", "Healthy Recipes"],
    status: "published",
    published_at: new Date("2025-06-01T08:00:00Z"),
    view_count: 250,
    comment_count: 0,
    content: "Закуската е най-важното хранене през деня. Вижте няколко лесни рецепти, които ще ви дадат енергия и здраве."
  },
  {
    slug: "morning-yoga-routine",
    title: "Утрена йога рутина за начинаещи",
    author: "fit_martin",
    categories: ["exercise", "mental_health"],
    tags: ["Yoga", "Meditation", "Exercise"],
    status: "published",
    published_at: new Date("2025-06-10T09:00:00Z"),
    view_count: 400,
    comment_count: 0,
    content: "Започнете деня си с лесна йога рутина, която помага за тонус и спокойствие."
  },
  {
    slug: "benefits-of-running",
    title: "Ползите от тичането",
    author: "runner_tom",
    categories: ["exercise"],
    tags: ["Running", "Wellness", "Fitness"],
    status: "draft",
    published_at: null,
    view_count: 0,
    comment_count: 0,
    content: "Тичането е чудесен начин да подобрите сърдечно-съдовата си система и общото здраве."
  },
  {
    slug: "mental-health-tips",
    title: "Съвети за психично здраве",
    author: "meditation_guide",
    categories: ["mental_health"],
    tags: ["Mental Health", "Meditation", "Wellness"],
    status: "published",
    published_at: new Date("2025-05-20T10:00:00Z"),
    view_count: 300,
    comment_count: 0,
    content: "Ежедневните практики могат да помогнат за подобряване на психичното здраве."
  },
  {
    slug: "healthy-dinner-recipes",
    title: "Рецепти за здравословна вечеря",
    author: "nutrition_expert",
    categories: ["nutrition", "recipes"],
    tags: ["Healthy Recipes", "Diet"],
    status: "published",
    published_at: new Date("2025-06-12T18:00:00Z"),
    view_count: 350,
    comment_count: 0,
    content: "Вкусни и лесни за приготвяне рецепти за вечеря, които подпомагат здравето."
  },
  {
    slug: "fitness-for-beginners",
    title: "Фитнес за начинаещи",
    author: "fit_martin",
    categories: ["exercise"],
    tags: ["Fitness", "Exercise"],
    status: "published",
    published_at: new Date("2025-06-15T08:30:00Z"),
    view_count: 220,
    comment_count: 0,
    content: "Основи на фитнес тренировките за хора без предишен опит."
  },
  {
    slug: "wellness-lifestyle-guide",
    title: "Ръководство за уелнес начин на живот",
    author: "wellness_john",
    categories: ["wellness"],
    tags: ["Wellness"],
    status: "draft",
    published_at: null,
    view_count: 0,
    comment_count: 0,
    content: "Как да живеете по-здравословно и пълноценно."
  }
]);

db.comments.insertMany([
  { post_slug: "healthy-breakfast-ideas", author: "editor_nina", content: "Страхотна статия!", created_at: new Date("2025-06-01T10:00:00Z") },
  { post_slug: "morning-yoga-routine", author: "yoga_master", content: "Ще го пробвам още утре сутрин!", created_at: new Date("2025-06-10T10:15:00Z") },
  { post_slug: "mental-health-tips", author: "guest_writer", content: "Много полезни съвети.", created_at: new Date("2025-05-21T09:00:00Z") },
  { post_slug: "fitness-for-beginners", author: "runner_tom", content: "Добри насоки за начинаещи.", created_at: new Date("2025-06-16T08:30:00Z") },
  { post_slug: "healthy-dinner-recipes", author: "nutrition_expert", content: "Вкусно изглежда!", created_at: new Date("2025-06-12T19:00:00Z") },
  { post_slug: "healthy-breakfast-ideas", author: "fit_martin", content: "Обичам такива рецепти!", created_at: new Date("2025-06-01T11:00:00Z") },
  { post_slug: "mental-health-tips", author: "meditation_guide", content: "Важно е да говорим за това.", created_at: new Date("2025-05-22T10:00:00Z") },
  { post_slug: "morning-yoga-routine", author: "healthy_anna", content: "Страхотна рутина!", created_at: new Date("2025-06-10T11:00:00Z") },
  { post_slug: "fitness-for-beginners", author: "fit_martin", content: "Благодаря за включването!", created_at: new Date("2025-06-16T09:00:00Z") },
  { post_slug: "healthy-dinner-recipes", author: "wellness_john", content: "Това ми харесва!", created_at: new Date("2025-06-12T20:00:00Z") }
]);

print("Данните бяха вкарани успешно в базата blog_platform_21308.");
