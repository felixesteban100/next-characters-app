import { clsx } from 'clsx';
import Link from 'next/link';

interface Breadcrumb {
  label: string;
  href?: string;
  active?: boolean;
}

export default function Breadcrumbs({
  breadcrumbs,
}: {
  breadcrumbs: Breadcrumb[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="mb-16 block">
      <ol className={clsx(/* lusitana.className,  */'flex text-xl md:text-2xl')}>
        {breadcrumbs.map((breadcrumb, index) => (
          <li
            key={breadcrumb.label}
            aria-current={breadcrumb.active}
            className={clsx(
              breadcrumb.active ? 'text-primary' : 'text-muted-foreground',
            )}
          >
            {breadcrumb.href ?
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              :
              <div>{breadcrumb.label}</div>
            }
            {index < breadcrumbs.length - 1 ? (
              <span className="mx-3 inline-block">/</span>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
}
