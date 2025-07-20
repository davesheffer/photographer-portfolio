# Internationalization (i18n) Implementation

This photography portfolio now supports both Hebrew and English languages with a seamless language switching experience.

## Features

### 🌐 Language Support
- **Hebrew (עברית)** - Default language with RTL layout
- **English** - Full translation with LTR layout
- Automatic direction switching (RTL/LTR)
- Persistent language preference (localStorage)

### 🔄 Language Switcher
- Available in both mobile and desktop navigation
- Shows current language and allows switching
- Smooth transitions between languages
- Visual language indicator (EN/עב)

### 📱 Responsive Design
- Works seamlessly on mobile and desktop
- Maintains design integrity in both languages
- Proper text alignment for RTL/LTR

## Implementation Details

### Core Files
- `src/contexts/LanguageContext.js` - Language state management
- `src/lib/translations.js` - Translation strings for both languages
- `src/components/LanguageSwitcher.js` - Language toggle component
- `src/components/ClientLayout.js` - Handles document direction updates

### Updated Components
- `src/app/layout.js` - Root layout with language provider
- `src/components/Navigation.js` - Navigation with translations
- `src/app/page.js` - Home page with translations
- `src/app/contact/page.js` - Contact page with translations

### Translation Keys
All text content is managed through translation keys in `src/lib/translations.js`:

```javascript
// Example usage
const { language } = useLanguage();
const t = useTranslations(language);

return <h1>{t.home}</h1>; // "בית" in Hebrew, "Home" in English
```

### Language Context Usage
```javascript
import { useLanguage } from '@/contexts/LanguageContext';

const { language, switchLanguage, isRTL } = useLanguage();
```

## Adding New Translations

1. Add new keys to both `he` and `en` objects in `src/lib/translations.js`
2. Use the translation in components: `{t.yourNewKey}`
3. Test in both languages

## Browser Support
- Automatic language detection
- Fallback to Hebrew if unsupported language
- Persistent preference across sessions

## Performance
- Minimal bundle size impact
- Client-side language switching
- No page reloads required
- Optimized font loading for both Hebrew and Latin characters