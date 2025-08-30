import { NextResponse } from 'next/server'

import { HeaderItem } from '@/app/types/menu'
import { FeaturesType } from '@/app/types/features'
import { ExpertChiefType } from '@/app/types/expertchief'
import { GalleryImagesType } from '@/app/types/galleryimage'
import { FooterLinkType } from '@/app/types/footerlink'
import { FullMenuType } from '@/app/types/fullmenu'

const HeaderData: HeaderItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
]

const FeaturesData: FeaturesType[] = [
  {
    imgSrc: '/images/Features/featureOne.svg',
    heading: 'Premium Selection',
    subheading:
      'We offer a diverse selection of dragon fruit, including the classic white, vibrant purple, and sweet yellow varieties to satisfy every taste',
  },
  {
    imgSrc: '/images/Features/featureTwo.svg',
    heading: 'Ecuador Grown',
    subheading:
      'Located in the perfect climate of Ecuador, our farm benefits from ideal growing conditions that produce exceptional dragon fruit',
  },
  {
    imgSrc: '/images/Features/featureThree.svg',
    heading: 'Expertly Prepared, Shipped, and Delivered',
    subheading:
      'Each dragon fruit is carefully selected and harvested at peak ripeness to guarantee the finest taste and nutritional value',
  },
  {
    imgSrc: '/images/Features/featureFour.svg',
    heading: 'Commitment to Quality',
    subheading: 'We devote great attention and care to our farm\'s environment, fostering optimal conditions for the finest dragon fruit production',
  }
]

const ExpertChiefData: ExpertChiefType[] = [
  {
    profession: 'Senior Chef',
    name: 'Marco Benton',
    imgSrc: '/images/Expert/boyone.png',
  },
  {
    profession: 'Junior Chef',
    name: 'Elena Rivera',
    imgSrc: '/images/Expert/girl.png',
  },
  {
    profession: 'Junior Chef',
    name: 'John Doe',
    imgSrc: '/images/Expert/boytwo.png',
  },
]

const GalleryImagesData: GalleryImagesType[] = [
  {
    src: '/images/Gallery/foodone.webp',
    name: 'Premium Selection',
    price: 35,
    description: 'We offer a diverse selection of dragon fruit, including the classic white, vibrant purple, and sweet yellow varieties to satisfy every taste',
  },
  {
    src: '/images/Gallery/foodtwo.webp',
    name: 'Christmas salad(118 Kcal)',
    price: 17,
  },
  {
    src: '/images/Gallery/foodthree.webp',
    name: 'Sauteed mushrooms with pumpkin bowl(238 kcal)',
    price: 45,
  },
  {
    src: '/images/Gallery/foodfour.webp',
    name: 'BBQ Chicken Feast Pizza(272 kcal)',
    price: 27,
  },
]

const FullMenuData: FullMenuType[] = [
  {
    name: 'Grilled Salmon',
    price: '$18.99',
    description: 'Served with lemon butter sauce and grilled vegetables.',
  },
  {
    name: 'Caesar Salad',
    price: '$9.99',
    description: 'Crisp romaine with parmesan, croutons, and Caesar dressing.',
  },
  {
    name: 'Margherita Pizza',
    price: '$13.49',
    description: 'Classic pizza with tomato, mozzarella, and fresh basil.',
  },
  {
    name: 'Tomato Basil Soup',
    price: '$6.99',
    description: 'Creamy tomato soup with a hint of garlic and fresh basil.',
  },
  {
    name: 'Chocolate Lava Cake',
    price: '$7.99',
    description:
      'Warm chocolate cake with a molten center served with vanilla ice cream.',
  },
  {
    name: 'Spaghetti Carbonara',
    price: '$15.25',
    description:
      'Spaghetti tossed with eggs, pancetta, parmesan, and black pepper.',
  },
  {
    name: 'Tiramisu',
    price: '$8.50',
    description:
      'Layered espresso-soaked ladyfingers with mascarpone and cocoa.',
  },
]

const FooterLinkData: FooterLinkType[] = []

export const GET = () => {
  return NextResponse.json({
    HeaderData,
    FeaturesData,
    ExpertChiefData,
    GalleryImagesData,
    FullMenuData,
    FooterLinkData,
  })
}
