import { GiftData } from '@/types/gift';

export const SAMPLE_GIFT: GiftData = {
  id: '8xK92m',
  presentation: {
    themeId: 'sunbeam-pop',
    templateId: 'sunbeam-pop',
    fontPairing: 'editorial-mix',
    pacing: 'standard',
  },
  content: {
    recipient: {
      name: 'Alex',
    },
    occasion: 'birthday',
    stages: {
      invitation: {
        leadIn: 'Someone put together a little something for you',
        title: 'For Alex.',
        cue: 'Best opened with a warm drink and a few quiet minutes.',
        actionText: 'Open this up',
      },
      introduction: {
        headline: 'Before another year gets too loud...',
        body: [
          'Birthdays usually come with rushed group texts, generic greeting cards, and a lot of noise.',
          'Instead of that, this is just a quiet collection of small things gathered from this past year—a few memories, a couple of inside jokes, and things that wouldn’t make sense to anyone else.',
          'No rush. Go at your own pace.',
        ],
        actionText: 'Turn the page',
      },
      playful: {
        prompt: 'First, a quick calibration question:',
        subtitle: 'Select whichever one feels most painfully accurate to your daily reality:',
        options: [
          {
            id: 'opt-tabs',
            label: 'Having 47 browser tabs open while claiming you need every single one',
            response: 'Accurate. And at least three of them are articles from 2022 you promise you will finish reading this weekend.',
          },
          {
            id: 'opt-coffee',
            label: 'Treating iced coffee as an essential food group regardless of outside temperature',
            response: 'Even when it is literally freezing outside, iced coffee remains non-negotiable. Respect.',
          },
          {
            id: 'opt-plans',
            label: 'Making elaborate weekend plans and then getting intensely happy when they get cancelled',
            response: 'The sheer, unadulterated joy of an empty calendar is undefeated.',
          },
        ],
        payoff: 'Glad we have our baseline established. Now for the actual moments.',
      },
      moments: {
        sectionTitle: 'A Few Selected Moments',
        subtitle: 'A handful of things that stood out this past year.',
        items: [
          {
            id: 'm-1',
            type: 'story',
            title: 'The Great Navigation Disaster',
            dateOrEra: 'Last Autumn',
            narrative: [
              'Remember when you insisted you knew a "shortcut" that bypassed highway traffic?',
              'Forty-five minutes later, we were driving past a horse farm on an unpaved gravel road with zero cell service.',
              'You turned down the radio so you could "see better," which remains the most confident defensive driving technique ever witnessed.',
            ],
            takeaway: 'We were an hour late, but we still talk about the farm horses.',
          },
          {
            id: 'm-2',
            type: 'inside_joke',
            setup: 'When someone asks what you want for dinner and you say "Whatever is easy"',
            punchline: 'Translation: I have rejected 9 consecutive suggestions and will continue until you guess the exact secret craving I refuse to name.',
            contextNote: 'A true classic that occurs at least three times a month.',
          },
          {
            id: 'm-3',
            type: 'place',
            placeName: 'The Corner Diner on 4th Street',
            coordinatesOrArea: 'Table by the radiator',
            memoryDescription:
              'The place where we sat for nearly three hours over two cups of lukewarm tea, deconstructing life plans, laughing until the staff started vacuuming around our chairs, and realizing that good conversations are the rarest currency.',
          },
          {
            id: 'm-4',
            type: 'song',
            songTitle: 'Vienna',
            artist: 'Billy Joel',
            dateOrEra: 'That rainy drive home',
            lyricSnippet: 'Slow down, you’re doing fine / You can’t be everything you want to be before your time',
            associatedMemory:
              'The track that played when you finally admitted you had taken on way too much at once. It was a good reminder that pacing yourself isn’t falling behind.',
          },
          {
            id: 'm-5',
            type: 'quote',
            quoteText: 'I am not stubborn, I am just thoroughly committed to my preliminary hypothesis.',
            attribution: 'Alex, while refusing to read assembly instructions',
            context: 'Spoken with total academic conviction in front of an unassembled bookshelf.',
          },
          {
            id: 'm-6',
            type: 'message',
            heading: 'A small observation',
            body: 'You have this quiet knack for showing up when people need grounding, even when you have a hundred things on your own plate. It doesn’t go unnoticed.',
          },
        ],
      },
      realization: {
        headline: 'None of these were gathered at random.',
        threads: [
          {
            clue: 'The gravel road, the 47 browser tabs, the radiator table...',
            subtext: 'Every single one points to how uniquely you move through the world.',
          },
          {
            clue: 'The stubborn hypotheses & quiet loyalty',
            subtext: 'You don’t do anything halfway, and you make ordinary days distinctly more memorable.',
          },
        ],
        realizationMessage:
          'This wasn’t generated by an algorithm or picked from a shelf. It was put together because your presence in everyday life makes a genuine, lasting difference to the people around you.',
      },
      appreciation: {
        headline: 'Happy Birthday, Alex.',
        paragraphs: [
          'Another year older, definitely not any less opinionated about coffee or navigation, and all the better for it.',
          'Thank you for being someone who brings so much honesty, humor, and thoughtfulness into the room. Having you in my corner is one of the things I am most grateful for.',
          'I hope this year brings you spaces to breathe, projects that excite you, and plenty of unhurried mornings.',
        ],
        warmSignoff: 'With immense gratitude and celebration',
      },
      ending: {
        birthdayWish: 'Wishing you a really wonderful year ahead.',
        closingThought: 'May your tabs be fewer, your coffee strong, and your shortcuts occasionally lead to actual roads.',
        pressureFreeNote: 'No need to reply right away. Just take this moment and enjoy your birthday.',
        allowReplay: true,
      },
    },
  },
};

export function getGiftById(id: string): GiftData | null {
  // In this prototype milestone, /g/8xK92m returns the curated Alex birthday gift.
  // Any other random ID also gracefully falls back to a sample gift with that ID so testers can try different URLs.
  if (id === '8xK92m') {
    return SAMPLE_GIFT;
  }
  
  // Return the sample gift with the requested ID for local testing
  return {
    ...SAMPLE_GIFT,
    id,
  };
}
