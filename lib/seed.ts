import 'dotenv/config';
import db from './db';
import { categories, products } from './schema';
import { eq } from 'drizzle-orm';
import { generateProductImage } from './utils';

async function main() {
  console.log('Starting database seed...');

  try {
    // 1. Seed Categories
    console.log('Seeding categories...');
    const existingCategories = await db.select().from(categories);
    
    if (existingCategories.length === 0) {
      await db.insert(categories).values([
        {
          name: 'Apex Bloodlines',
          slug: 'apex-bloodlines',
          description: 'Pure-bred Tyrannosaurs representing the pinnacle of genetic engineering.',
        },
        {
          name: 'Genetic Mutations',
          slug: 'genetic-mutations',
          description: 'Rare variants with unique pigmentations and physiological enhancements.',
        },
        {
          name: 'Environmental Adapters',
          slug: 'environmental-adapters',
          description: 'Specimens optimized for extreme climates and terrains.',
        },
      ]);
      console.log('Categories seeded.');
    }

    const allCategories = await db.select().from(categories);
    const apexCat = allCategories.find(c => c.slug === 'apex-bloodlines');
    const mutationCat = allCategories.find(c => c.slug === 'genetic-mutations');
    const adapterCat = allCategories.find(c => c.slug === 'environmental-adapters');

    // 2. Seed Products (T-Rex Inventory)
    console.log('Seeding products...');
    
    const rexInventory = [
      {
        name: 'Obsidian Monarch',
        slug: 'obsidian-monarch',
        description: 'Featuring stunning jet-black scales and piercing amber eyes, this rare variant is the crown jewel of any collection. Bred from the ancient "Blackwood" lineage.',
        price: '25000000.00',
        stock: 1,
        categoryId: mutationCat?.id,
        specs: {
          age: 'Prime Adult (15 years)',
          temperament: 'Highly intelligent and calculating',
          diet: 'Premium Choice Cuts',
          height: '4.2 meters',
          weight: '9,500 kg',
          purity: '99.9%',
          lineage: 'Ancient Blackwood VII',
        },
      },
      {
        name: 'Alpine Sovereignty',
        slug: 'alpine-sovereignty',
        description: 'Adapted for sub-zero temperatures with a thick coat of pure white proto-feathers. A majestic sight in the snow.',
        price: '12000000.00',
        stock: 2,
        categoryId: adapterCat?.id,
        specs: {
          age: 'Adult (12 years)',
          temperament: 'Stoic and observant',
          diet: 'Large Game',
          height: '3.9 meters',
          weight: '8,200 kg',
          purity: '98.5%',
          lineage: 'Glacial Crown',
        },
      },
      {
        name: 'Royal Juvenile',
        slug: 'royal-juvenile',
        description: 'Fast, agile, and showing immense potential for growth. An ideal companion for a new master keeper.',
        price: '4500000.00',
        stock: 5,
        categoryId: apexCat?.id,
        specs: {
          age: 'Juvenile (3 years)',
          temperament: 'Curious and trainable',
          diet: 'High-Protein Supplementation',
          height: '2.1 meters',
          weight: '1,500 kg',
          purity: '100% Alpha-Strain',
          lineage: 'Regent Dynasty',
        },
      },
      {
        name: 'Crimson Ember',
        slug: 'crimson-ember',
        description: 'A striking variant with bioluminescent markings that glow when agitated. Bred for intimidating presence.',
        price: '18500000.00',
        stock: 1,
        categoryId: mutationCat?.id,
        specs: {
          age: 'Young Adult (7 years)',
          temperament: 'Aggressive and reactive',
          diet: 'Live Prey Only',
          height: '3.7 meters',
          weight: '7,800 kg',
          purity: '95.2%',
          lineage: 'Volcanic Forge',
        },
      },
      {
        name: 'Azure Reef Hunter',
        slug: 'azure-reef-hunter',
        description: 'A specialized swimmer with teal-tinted scales and webbed extremities. Master of the coastal domains.',
        price: '9800000.00',
        stock: 3,
        categoryId: adapterCat?.id,
        specs: {
          age: 'Adult (9 years)',
          temperament: 'Quiet and efficient',
          diet: 'Aquatic Giants',
          height: '3.6 meters',
          weight: '6,400 kg',
          purity: '97.8%',
          lineage: 'Tidal Fury',
        },
      }
    ];

    for (const rex of rexInventory) {
      const productData = {
        ...rex,
        imageUrl: generateProductImage(rex.name)
      };

      const existing = await db.select().from(products).where(eq(products.slug, rex.slug));
      if (existing.length === 0) {
        await db.insert(products).values(productData);
        console.log(`Seeded: ${rex.name}`);
      } else {
        await db.update(products).set({ 
          description: productData.description,
          price: productData.price,
          specs: productData.specs,
          imageUrl: productData.imageUrl 
        }).where(eq(products.slug, rex.slug));
        console.log(`Updated: ${rex.name}`);
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

