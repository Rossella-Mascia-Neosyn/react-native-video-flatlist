import React from 'react';
import { Text } from 'react-native';
import { PostProps } from '../components/FeedReelScroll/post.type';

const data: PostProps[] = [
  {
    id: 1,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 2,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>The first Blender Open Movie from 2006</Text>,
  },
  {
    id: 3,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 4,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 5,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 6,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 7,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 8,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 9,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 10,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 11,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 12,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 13,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 14,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 15,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 16,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 17,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 18,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 19,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 20,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
      there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
      uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
      shape of a full tank of good times.
    </Text>
    ,
  },
  {
    id: 21,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 22,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 23,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 24,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.
    </Text>
    ,
  },
  {
    id: 25,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 26,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>,
  },
  {
    id: 27,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 28,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 29,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 30,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 31,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 32,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 33,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 34,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 35,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 36,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 37,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 38,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 39,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 40,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      <Text>Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
        there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
        uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
        shape of a full tank of good times.</Text>,
  },
  {
    id: 41,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 42,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 43,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 44,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast."</Text>,
  },
  {
    id: 45,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 46,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.'</Text>,
  },
  {
    id: 47,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 48,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 49,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 50,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
      there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
      uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
      shape of a full tank of good times.'</Text>,
  },
  {
    id: 51,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 52,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 53,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 54,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast."</Text>,
  },
  {
    id: 55,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 56,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      <Text> 'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.'</Text>,
  },
  {
    id: 57,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 58,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 59,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 60,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: <Text>
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
      there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
      uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
      shape of a full tank of good times.'</Text>,
  },
  {
    id: 61,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 62,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 63,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 64,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 65,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 66,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 67,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 68,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 69,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 70,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 71,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 72,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 73,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 74,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 75,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 76,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 77,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 78,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 79,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 80,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 81,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 82,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 83,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 84,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 85,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 86,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 87,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 88,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 89,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 90,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 91,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 92,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 93,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 94,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 95,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 96,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 97,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 98,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 99,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 100,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 101,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 102,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 103,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 104,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 105,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 106,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 107,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 108,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 109,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 110,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
  {
    id: 111,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Big Buck Bunny tells the story of a giant rabbit with a heart bigger
        than himself. When one sunny day three rodents rudely harass him,
        something snaps... and the rabbit ain't no bunny anymore! In the typical
        cartoon tradition he prepares the nasty rodents a comical revenge.
        \n\nLicensed under the Creative Commons Attribution
        license\nhttp://www.bigbuckbunny.org
      </Text>
    ),
  },
  {
    id: 112,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: 'The first Blender Open Movie from 2006',
  },
  {
    id: 113,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerBlazes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        HBO GO now works with Chromecast -- the easiest way to enjoy online
        video on your TV. For when you want to settle into your Iron Throne to
        watch the latest episodes. For $35.\nLearn how to use Chromecast with
        HBO GO and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 114,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerEscapes.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      "Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for when Batman's escapes aren\t quite big enough. \
      For $35. Learn how to use Chromecast with Google Play Movies and more at google.com/chromecast.",
  },
  {
    id: 115,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerFun.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV. For $35. Find out more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 116,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerJoyrides.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Introducing Chromecast. The easiest way to enjoy online video and music on your TV—for the times that call for bigger joyrides. For $35. Learn how to use Chromecast with YouTube and more at google.com/chromecast.',
  },
  {
    id: 117,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ForBiggerMeltdowns.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Introducing Chromecast. The easiest way to enjoy online video and music
        on your TV—for the times that call for bigger meltdowns. For $35. Learn
        how to use Chromecast with YouTube and more at google.com/chromecast.
      </Text>
    ),
  },
  {
    id: 118,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4',
      },
      poster: {
        source: {
          uri: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Tears_of_Steel_frame_01_2a.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Tears of Steel was realized with crowd-funding by users of the open
        source 3D creation tool Blender. Target was to improve and test a
        complete open and free pipeline for visual effects in film - and to make
        a compelling sci-fi film in Amsterdam, the Netherlands. The film itself,
        and all raw material used for making it, have been released under the
        Creatieve Commons 3.0 Attribution license. Visit the tearsofsteel.org
        website to find out more about this, or to purchase the 4-DVD box with a
        lot of extras. (CC) Blender Foundation - http://www.tearsofsteel.org
      </Text>
    ),
  },
  {
    id: 119,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/Sintel.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent: (
      <Text>
        Work began in May 2009. The film was officially released on 27 September
        2010 at the Netherlands Film Festival. The online release was made
        available for download on 30 September 2010. The film was viewed over
        1,000,000 times in a matter of weeks. By May 2020, it was viewed 5.2
        million times on YouTube.
      </Text>
    ),
  },
  {
    id: 120,
    video: {
      source: {
        uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4',
      },
      poster: {
        source: {
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/SubaruOutbackOnStreetAndDirt.jpg',
        },
      },
      muted: true,
      repeat: true,
    },
    bodyContent:
      'Subaru is ready to take and bring any family on top of any road, just for keep driving some more and roam where \
    there is not even a hint of a road, where you just need space to put your wheels down and feel at one with the most \
    uncontaminated nature, where the prize of total freedom prevails over a declared average consumption of 7.4 l/100 km, in the \
    shape of a full tank of good times.',
  },
];
export default data;
