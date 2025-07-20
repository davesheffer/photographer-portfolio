import friends from "/public/com/friends.jpg";
import fun from "/public/com/fun.jpg";
import mombaby from "/public/com/mombaby.jpg";
import rakefet from "/public/com/rakefet.jpg";
import bishof2 from "/public/com/bishof2.jpg";

const posts = [
    {
        id: 1,
        title: {
            he: "רגעים שנתפסו בעדשה",
            en: "Moments Captured Through the Lens"
        },
        description: {
            he: "כל תמונה מספרת סיפור, וכל סיפור מחבר אותנו לרגש. בפוסט הזה אני חולקת איתכם את הרגעים המיוחדים שתפסתי עם החברים הכי טובים.",
            en: "Every photo tells a story, and every story connects us to emotion. In this post, I share with you the special moments I captured with the best of friends."
        },
        image: friends
    },
    {
        id: 2,
        title: {
            he: "כשהכיף הופך לאמנות",
            en: "When Fun Becomes Art"
        },
        description: {
            he: "יש רגעים שבהם הצילום הופך להיות יותר מסתם תיעוד - הוא הופך להיות חוויה. הנה סיפור על איך רגע של כיף הפך לתמונה בלתי נשכחת.",
            en: "There are moments when photography becomes more than just documentation - it becomes an experience. Here's a story about how a moment of fun turned into an unforgettable image."
        },
        image: fun
    },
    {
        id: 3,
        title: {
            he: "הקשר הכי טהור - אמא ותינוק",
            en: "The Purest Bond - Mother and Baby"
        },
        description: {
            he: "אין דבר יותר מרגש מלתפוס את הרגעים הראשונים בין אמא לתינוק שלה. האהבה הבלתי מותנית הזו היא מה שהופך כל צילום למיוחד.",
            en: "Nothing is more moving than capturing the first moments between a mother and her baby. This unconditional love is what makes every photo special."
        },
        image: mombaby
    },
    {
        id: 4,
        title: {
            he: "יופי טבעי בכל גיל",
            en: "Natural Beauty at Every Age"
        },
        description: {
            he: "הצילום הוא על לתפוס את היופי הטבעי של כל אדם, בכל גיל ובכל מצב. כאן אני חולקת את הסיפור מאחורי הצילום הזה ואיך הצלחתי לתפוס את הרגע המושלם.",
            en: "Photography is about capturing the natural beauty of every person, at every age and in every situation. Here I share the story behind this shoot and how I managed to capture the perfect moment."
        },
        image: rakefet
    },
    {
        id: 6,
        title: {
            he: "אור וצל - משחק של ניגודים",
            en: "Light and Shadow - A Play of Contrasts"
        },
        description: {
            he: "הצילום הוא משחק של אור וצל, של ניגודים ושל רגעים. בפוסט הזה אני מסבירה איך אני משתמשת באור הטבעי כדי ליצור תמונות דרמטיות ומרגשות.",
            en: "Photography is a play of light and shadow, of contrasts and moments. In this post, I explain how I use natural light to create dramatic and emotional images."
        },
        image: bishof2
    }
]

export default posts;