import type { Locale } from "@/i18n/dictionaries";
import { transferAstanaBorovoe } from "@/content/blog/transfer-astana-borovoe";
import { vstrechaAeroportNqz } from "@/content/blog/vstrecha-v-aeroportu-nqz";
import { arendaStariaBezVoditelya } from "@/content/blog/arenda-staria-bez-voditelya";
import { cenaTransferaAeroportNqz } from "@/content/blog/cena-transfera-aeroport-nqz";
import { pochasovayaArendaMinivena } from "@/content/blog/pochasovaya-arenda-minivena";
import { vstrechaDelegaciyKorporativnyyTransfer } from "@/content/blog/vstrecha-delegaciy-korporativnyy-transfer";
import { svadebnyyKortezhAstana } from "@/content/blog/svadebnyy-kortezh-astana";
import { turPoAstaneSVoditelem } from "@/content/blog/tur-po-astane-s-voditelem";
import { transferAstanaKaraganda } from "@/content/blog/transfer-astana-karaganda";
import { transferAstanaKokshetau } from "@/content/blog/transfer-astana-kokshetau";
import { arendaNaPolnyyDen } from "@/content/blog/arenda-na-polnyy-den";
import { hyundaiStariaLuxeObzorSalona } from "@/content/blog/hyundai-staria-luxe-obzor-salona";
import { indriverAstanaBorovoe } from "@/content/blog/indriver-astana-borovoe";
import { detskoeKresloTransferAstana } from "@/content/blog/detskoe-kreslo-transfer-astana";
import { nochnoyTransferVAstane } from "@/content/blog/nochnoy-transfer-v-astane";
import { transferNaKonferentsiiAstana } from "@/content/blog/transfer-na-konferentsii-astana";

// Блоки контента статьи — рендерятся в семантический HTML (h2/h3/p/ul/...).
export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "table"; head: string[]; rows: string[][] };

export type PostContent = {
  title: string;
  /** Используется как meta description и как анонс в карточке. */
  description: string;
  /** Краткое самодостаточное резюме (40–60 слов) — блок «Кратко» вверху + сигнал для AI. */
  tldr?: string;
  body: Block[];
  faq?: { q: string; a: string }[];
};

export type Post = {
  slug: string;
  /** Дата публикации, ISO (YYYY-MM-DD). */
  date: string;
  /** Дата обновления, ISO. */
  updated?: string;
  /** URL изображения (импортированный ассет, начинается с "/"). */
  image: string;
  imageWidth: number;
  imageHeight: number;
  /** Время чтения в минутах. */
  minutes: number;
  /** Слаги связанных постов для блока «Читайте также» (внутренняя перелинковка). */
  related?: string[];
  /** Тематическая сервисная страница для контекстной ссылки на money-page. */
  service?: "services" | "airport" | "fleet";
  /** Слаг коммерческой посадочной направления (RU) для взаимной перелинковки. */
  directionSlug?: string;
  t: Record<Locale, PostContent>;
};

export const POSTS: Post[] = [
  transferAstanaBorovoe,
  vstrechaAeroportNqz,
  arendaStariaBezVoditelya,
  cenaTransferaAeroportNqz,
  pochasovayaArendaMinivena,
  vstrechaDelegaciyKorporativnyyTransfer,
  svadebnyyKortezhAstana,
  turPoAstaneSVoditelem,
  transferAstanaKaraganda,
  transferAstanaKokshetau,
  arendaNaPolnyyDen,
  hyundaiStariaLuxeObzorSalona,
  indriverAstanaBorovoe,
  detskoeKresloTransferAstana,
  nochnoyTransferVAstane,
  transferNaKonferentsiiAstana,
];

export function allPosts(): Post[] {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return POSTS.find((p) => p.slug === slug);
}
