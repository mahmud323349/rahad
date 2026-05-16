
// script.js

// ১. শব্দগুলোর অ্যারে
const words = [" Social Media Poster Designer", "Banner Designer ", " Products Ads Designer", " Logo Designer"];

// ২. HTML এলিমেন্টটি ক্লাস দিয়ে ধরুন (querySelector ব্যবহার করে)
// 👈 এখানে পরিবর্তন করা হয়েছে
const textElement = document.querySelector('.text-animator');

// ৩. অবস্থা ও গতি
let wordIndex = 0; 
let charIndex = 0; 
let isDeleting = false; 
const typingSpeed = 100; 
const deletingSpeed = 60; 
const delayBeforeNextWord = 1500; 

function type() {
    // এলিমেন্ট না পেলে ফাংশন বন্ধ হবে
    if (!textElement) {
        console.error("Error: Could not find HTML element with class 'text-animator'.");
        return; 
    }

    const currentWord = words[wordIndex];
    let timeout;
    
    // টাইপ করা বা মোছা লজিক
    if (!isDeleting) {
        // টাইপ করা চলছে
        if (charIndex < currentWord.length) {
            charIndex++;
            timeout = typingSpeed;
        } else {
            // টাইপ শেষ, মোছা শুরু হবে
            isDeleting = true;
            timeout = delayBeforeNextWord;
        }
    } else {
        // মোছা চলছে
        if (charIndex > 0) {
            charIndex--;
            timeout = deletingSpeed;
        } else {
            // মোছা শেষ, পরের শব্দ শুরু হবে
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length; 
            timeout = typingSpeed;
        }
    }

    // টেক্সট ডিসপ্লে আপডেট
    textElement.textContent = currentWord.substring(0, charIndex);
    
    // পরের ধাপের জন্য রিকার্সিভ কল
    setTimeout(type, timeout);
}

// 👈 ফাংশনটি শুরু করুন (নিরাপদ কল)
document.addEventListener('DOMContentLoaded', type);
