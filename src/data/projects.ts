export type SlideKind = 'wide' | 'mobile' | 'phone'

export interface Slide {
  src: string
  alt: string
}

export interface Gallery {
  id: string
  label: string
  icon: string
  kind: SlideKind
  slides: Slide[]
}

export interface Project {
  id: string
  title: string
  description: string
  tags: string[]
  link?: { href: string; label: string }
  badge?: { icon: string; label: string }
  galleries: Gallery[]
}

const s = (src: string, alt: string): Slide => ({ src: `/screens/${src}`, alt })

export const projects: Project[] = [
  {
    id: 'bloom-web',
    title: 'Bloom Beauty — Web store',
    description:
      'Cosmetics e-commerce demo with SSR browsing: catalog with search and categories, product pages, cart, checkout with tax and shipping, order history, and an idempotent checkout guard.',
    tags: ['Next.js', 'TypeScript', 'React Query', 'MongoDB', 'SSR'],
    link: { href: 'https://bloom-shop-lac.vercel.app/', label: 'Live site' },
    galleries: [
      {
        id: 'desktop',
        label: 'Desktop',
        icon: 'ti-device-desktop',
        kind: 'wide',
        slides: [
          s('web/desktop-home.webp', 'Home page'),
          s('web/desktop-categories.webp', 'Shop by category'),
          s('web/desktop-shop.webp', 'Shop with filters'),
          s('web/desktop-product.webp', 'Product page'),
          s('web/desktop-cart.webp', 'Cart'),
          s('web/desktop-order.webp', 'Order details'),
        ],
      },
      {
        id: 'responsive',
        label: 'Responsive',
        icon: 'ti-device-mobile',
        kind: 'mobile',
        slides: [
          s('web/mobile-home.webp', 'Mobile home page'),
          s('web/mobile-shop.png', 'Mobile shop'),
          s('web/mobile-login.png', 'Mobile login'),
          s('web/mobile-footer.png', 'Mobile footer'),
        ],
      },
      {
        id: 'backend',
        label: 'Backend',
        icon: 'ti-database',
        kind: 'wide',
        slides: [
          s('web/mongo-products.webp', 'MongoDB products collection'),
          s('web/mongo-orders.webp', 'MongoDB orders collection'),
        ],
      },
    ],
  },
  {
    id: 'bloom-app',
    title: 'Bloom Beauty — iOS app',
    description:
      'Cosmetics e-commerce MVP for mobile: home with categories, product details, cart with quantity controls, and checkout — backed by its own REST API.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Node / Express', 'PostgreSQL', 'Prisma'],
    badge: { icon: 'ti-brand-apple', label: 'iOS app' },
    galleries: [
      {
        id: 'app',
        label: 'App',
        icon: 'ti-device-mobile',
        kind: 'phone',
        slides: [
          s('app/home.webp', 'App home'),
          s('app/categories.webp', 'App categories'),
          s('app/product.webp', 'App product page'),
          s('app/cart.webp', 'App cart'),
          s('app/checkout.webp', 'App checkout'),
        ],
      },
    ],
  },
  {
    id: 'admin',
    title: 'Beauty Products Admin',
    description:
      'Admin panel for a beauty products store: revenue dashboard with charts, products and orders with search, filters and pagination, side-drawer details, and customer management.',
    tags: ['React', 'TypeScript', 'Django REST', 'PostgreSQL', 'JWT', 'Docker'],
    link: {
      href: 'https://admin-products-shop-git-main-alexkoval25374-5785.vercel.app/',
      label: 'Live site',
    },
    galleries: [
      {
        id: 'admin',
        label: 'Admin',
        icon: 'ti-layout-dashboard',
        kind: 'wide',
        slides: [
          s('admin/dashboard.webp', 'Dashboard'),
          s('admin/products.webp', 'Products'),
          s('admin/product-details.webp', 'Product details drawer'),
          s('admin/products-page-2.webp', 'Products, page 2'),
          s('admin/orders.webp', 'Orders'),
          s('admin/order-details.webp', 'Order details drawer'),
          s('admin/docker.webp', 'Docker containers'),
        ],
      },
    ],
  },
]
