// Script to analyze duplicate images in the images.js file

const fs = require('fs');
const path = require('path');

// Read and parse the images file
const imagesPath = './src/app/lib/images.js';
const imagesContent = fs.readFileSync(imagesPath, 'utf-8');

// Extract all image entries with their sources
const srcPattern = /src:\s*([a-zA-Z0-9_]+)/g;
const idPattern = /id:\s*(\d+)/g;

const allSrcMatches = [...imagesContent.matchAll(srcPattern)];
const allIdMatches = [...imagesContent.matchAll(idPattern)];

console.log('=== DUPLICATE IMAGE ANALYSIS ===\n');

// Find duplicate source images
const srcCounts = {};
const srcLocations = {};

allSrcMatches.forEach((match, index) => {
    const src = match[1];
    if (!srcCounts[src]) {
        srcCounts[src] = 0;
        srcLocations[src] = [];
    }
    srcCounts[src]++;

    // Find line number
    const beforeMatch = imagesContent.substring(0, match.index);
    const lineNumber = beforeMatch.split('\n').length;
    srcLocations[src].push(lineNumber);
});

console.log('DUPLICATE IMAGES BY SOURCE:');
console.log('==========================');
Object.keys(srcCounts).forEach(src => {
    if (srcCounts[src] > 1) {
        console.log(`🔄 ${src}: appears ${srcCounts[src]} times`);
        console.log(`   Lines: ${srcLocations[src].join(', ')}`);
        console.log('');
    }
});

// Find duplicate IDs within galleries
console.log('\nDUPLICATE IDs WITHIN GALLERIES:');
console.log('===============================');

// Extract gallery sections
const galleryPattern = /name:\s*"([^"]+)"[\s\S]*?images:\s*\[([\s\S]*?)\]\s*}/g;
const galleryMatches = [...imagesContent.matchAll(galleryPattern)];

galleryMatches.forEach(galleryMatch => {
    const galleryName = galleryMatch[1];
    const galleryContent = galleryMatch[2];

    // Extract IDs from this gallery
    const galleryIdMatches = [...galleryContent.matchAll(/id:\s*(\d+)/g)];
    const idCounts = {};

    galleryIdMatches.forEach(match => {
        const id = match[1];
        idCounts[id] = (idCounts[id] || 0) + 1;
    });

    // Check for duplicates in this gallery
    const duplicates = Object.keys(idCounts).filter(id => idCounts[id] > 1);
    if (duplicates.length > 0) {
        console.log(`📁 Gallery "${galleryName}"`);
        duplicates.forEach(id => {
            console.log(`   ID ${id}: appears ${idCounts[id]} times`);
        });
        console.log('');
    }
});

console.log('\nRECOMMENDED ACTIONS:');
console.log('===================');
console.log('1. Remove duplicate image entries with same src');
console.log('2. Ensure unique IDs within each gallery');
console.log('3. Consider if duplicate images serve different purposes');
console.log('4. Update IDs to be sequential and unique within galleries');
