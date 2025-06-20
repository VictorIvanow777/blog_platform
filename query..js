db = db.getSiblingDB('blog_platform_21308');

// Вземи всички потребители
print("=== Всички потребители ===");
db.users.find().pretty();

// Вземи активни автори
print("\n=== Активни автори ===");
db.users.find({ role: "author", is_active: true }).pretty();

// Вземи потребители с Twitter профил
print("\n=== Потребители с Twitter ===");
db.users.find({ "social_links.twitter": { $exists: true } }).pretty();

// Вземи всички публикувани постове
print("\n=== Всички публикувани постове ===");
db.posts.find({ status: "published" }).pretty();

// Популярни постове с над 200 преглеждания
print("\n=== Популярни постове (200+ преглеждания) ===");
db.posts.find({ view_count: { $gte: 200 } }).sort({ view_count: -1 }).pretty();

// Постове на автора 'healthy_anna'
print("\n=== Постове на 'healthy_anna' ===");
db.posts.find({ author: "healthy_anna" }).pretty();

// Категории с поне 1 пост
print("\n=== Категории с поне 1 пост ===");
db.categories.find({ post_count: { $gt: 0 } }).pretty();

// Всички тагове
print("\n=== Всички тагове ===");
db.tags.find().pretty();

// Промяна на роля на потребител 'healthy_anna' на редактор
print("\n=== Промяна на роля на потребител 'healthy_anna' ===");
db.users.updateOne({ username: "healthy_anna" }, { $set: { role: "editor" } });
print(db.users.findOne({ username: "healthy_anna" }));

// Увеличаване на броя преглеждания на поста 'healthy-breakfast-ideas' с 50
print("\n=== Увеличаване на броя преглеждания на пост 'healthy-breakfast-ideas' с 50 ===");
db.posts.updateOne({ slug: "healthy-breakfast-ideas" }, { $inc: { view_count: 50 } });
print(db.posts.findOne({ slug: "healthy-breakfast-ideas" }));

// Добавяне на таг 'Fitness' към поста 'benefits-of-running'
print("\n=== Добавяне на таг 'Fitness' към пост 'benefits-of-running' ===");
db.posts.updateOne({ slug: "benefits-of-running" }, { $push: { tags: "Fitness" } });
print(db.posts.findOne({ slug: "benefits-of-running" }));

// Публикуване на чернова 'benefits-of-running'
print("\n=== Публикуване на чернова 'benefits-of-running' ===");
db.posts.updateOne(
  { slug: "benefits-of-running" },
  { $set: { status: "published", published_at: new Date() }, $inc: { view_count: 1 } }
);
print(db.posts.findOne({ slug: "benefits-of-running" }));

// Актуализиране на описанието на категорията 'fitness'
print("\n=== Актуализиране на описанието на категория 'fitness' ===");
