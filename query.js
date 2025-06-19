db = db.getSiblingDB('blog_platform_21308');

print("=== Всички потребители ===");
db.users.find().pretty();

print("\n=== Активни автори ===");
db.users.find({ role: "author", is_active: true }).pretty();

print("\n=== Потребители с Twitter ===");
db.users.find({ "social_links.twitter": { $exists: true } }).pretty();

print("\n=== Всички публикувани постове ===");
db.posts.find({ status: "published" }).pretty();

print("\n=== Популярни постове (200+ преглеждания) ===");
db.posts.find({ view_count: { $gte: 200 } }).sort({ view_count: -1 }).pretty();

print("\n=== Постове на 'healthy_anna' ===");
db.posts.find({ author: "healthy_anna" }).pretty();

print("\n=== Категории с поне 1 пост ===");
db.categories.find({ post_count: { $gt: 0 } }).pretty();

print("\n=== Всички тагове ===");
db.tags.find().pretty();

print("\n=== Промяна на роля на потребител 'healthy_anna' ===");
db.users.updateOne({ username: "healthy_anna" }, { $set: { role: "editor" } });
print(db.users.findOne({ username: "healthy_anna" }));

print("\n=== Увеличаване на броя преглеждания на пост 'healthy-breakfast-ideas' с 50 ===");
db.posts.updateOne({ slug: "healthy-breakfast-ideas" }, { $inc: { view_count: 50 } });
print(db.posts.findOne({ slug: "healthy-breakfast-ideas" }));

print("\n=== Добавяне на таг 'Fitness' към пост 'benefits-of-running' ===");
db.posts.updateOne({ slug: "benefits-of-running" }, { $push: { tags: "Fitness" } });
print(db.posts.findOne({ slug: "benefits-of-running" }));

print("\n=== Публикуване на чернова 'benefits-of-running' ===");
db
