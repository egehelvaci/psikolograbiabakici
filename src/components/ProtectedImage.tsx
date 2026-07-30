"use client";

import Image, { type ImageProps } from "next/image";

/**
 * Kopyalama ve sürüklemeye karşı korumalı next/image sarmalayıcısı.
 * Olay yöneticileri gerektirdiği için istemci bileşenidir; sunucu
 * bileşenlerinden güvenle kullanılabilir.
 */
export default function ProtectedImage({ alt, ...props }: ImageProps) {
  return <Image alt={alt} draggable={false} onCopy={(e) => e.preventDefault()} {...props} />;
}
