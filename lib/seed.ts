import 'dotenv/config';
import db from './db';
import { categories, products } from './schema';
import { eq } from 'drizzle-orm';

async function main() {
  console.log('Starting database seed...');

  try {
    // 1. Seed Categories
    console.log('Seeding categories...');
    const existingCategories = await db.select().from(categories);
    
    if (existingCategories.length === 0) {
      await db.insert(categories).values([
        {
          name: 'Standard T-Rex',
          slug: 'standard-t-rex',
          description: 'The classic apex predator everyone knows and loves.',
        },
        {
          name: 'Rare Variants',
          slug: 'rare-variants',
          description: 'Unique genetic mutations and rare environmental adaptations.',
        },
        {
          name: 'Specialized',
          slug: 'specialized',
          description: 'Dinosaurs bred for specific climates or roles.',
        },
      ]);
      console.log('Categories seeded.');
    } else {
      console.log('Categories already exist, skipping.');
    }

    const allCategories = await db.select().from(categories);
    const standardCat = allCategories.find(c => c.slug === 'standard-t-rex');
    const rareCat = allCategories.find(c => c.slug === 'rare-variants');
    const specializedCat = allCategories.find(c => c.slug === 'specialized');

    // 2. Seed Products (T-Rex Inventory)
    console.log('Seeding products...');
    
    const rexInventory = [
      {
        name: 'Alpine Tyrannosaur',
        slug: 'alpine-tyrannosaur',
        description: 'Adapted for sub-zero temperatures with a thick coat of proto-feathers.',
        price: '8500000.00',
        stock: 2,
        categoryId: specializedCat?.id,
        imageUrl: 'https://images.unsplash.com/photo-1517922193564-63953559630e?q=80&w=1000&auto=format&fit=crop',
        specs: {
          age: 'Adult (12 years)',
          temperament: 'Stoic but highly territorial',
          diet: 'Mega-fauna (Woolly Mammoths preferred)',
          height: '3.8 meters',
          weight: '7,500 kg',
        },
      },
      {
        name: 'Juvenile T-Rex',
        slug: 'juvenile-t-rex',
        description: 'Fast, agile, and full of energy. Perfect for those who want to grow with their companion.',
        price: '4500000.00',
        stock: 5,
        categoryId: standardCat?.id,
        imageUrl: 'https://images.unsplash.com/photo-1615110303063-d2508933b946?q=80&w=1000&auto=format&fit=crop',
        specs: {
          age: 'Juvenile (3 years)',
          temperament: 'Hyperactive and curious',
          diet: 'Small mammals and high-protein pellets',
          height: '2.1 meters',
          weight: '1,200 kg',
        },
      },
      {
        name: 'Obsidian Tyrannosaur',
        slug: 'obsidian-tyrannosaur',
        description: 'Featuring stunning jet-black scales and piercing amber eyes, this rare variant is the crown jewel of any collection.',
        price: '25000000.00',
        stock: 1,
        categoryId: rareCat?.id,
        imageUrl: 'https://images.unsplash.com/photo-1559967011-74ba4164be6c?q=80&w=1000&auto=format&fit=crop',
        specs: {
          age: 'Prime Adult (15 years)',
          temperament: 'Highly intelligent and calculating',
          diet: 'Exotic meats',
          height: '4.2 meters',
          weight: '9,000 kg',
        },
      },
      {
        name: 'Island Tyrannosaur',
        slug: 'island-tyrannosaur',
        description: 'A smaller, more colorful subspecies from tropical archipelagos. Excellent swimmer.',
        price: '6200000.00',
        stock: 3,
        categoryId: specializedCat?.id,
        imageUrl: 'https://images.unsplash.com/photo-1525833324c41-26f634d0b0b8?q=80&w=1000&auto=format&fit=crop',
        specs: {
          age: 'Young Adult (8 years)',
          temperament: 'Relatively docile in water',
          diet: 'Piscivore and large reef dwellers',
          height: '3.5 meters',
          weight: '6,000 kg',
        },
      },
      {
        name: 'Desert Stalker Rex',
        slug: 'desert-stalker-rex',
        description: 'Pale, sandy coloring with incredible heat tolerance and the ability to go weeks without water.',
        price: '7800000.00',
        stock: 4,
        categoryId: specializedCat?.id,
        imageUrl: 'https://images.unsplash.com/photo-1568515045052-f9a854d70ec2?q=80&w=1000&auto=format&fit=crop',
        specs: {
          age: 'Adult (10 years)',
          temperament: 'Patient ambush predator',
          diet: 'Desert fauna',
          height: '3.9 meters',
          weight: '7,000 kg',
        },
      },
    ];

    for (const rex of rexInventory) {
      const existing = await db.select().from(products).where(eq(products.slug, rex.slug));
      if (existing.length === 0) {
        await db.insert(products).values(rex);
        console.log(`Seeded: ${rex.name}`);
      } else {
        console.log(`Product already exists: ${rex.name}`);
      }
    }

    console.log('Database seed completed successfully!');
  } catch (error) {
    console.error('Error during seed:', error);
    process.exit(1);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    process.exit(0);
  });

