// -> Imports -> Components
import Link from 'next/link';

export const FooterWidget: React.FC = () => {
  return (
    <div className="box is-shadowless">
      <article className="media-content">
        <p className="is-size-6">Created with ❤️ by Andy.</p>
        <ul>
          <li>
            <Link href="#">Privacy</Link>
          </li>
          <li>
            <Link href="#">Privacy</Link>
          </li>
          <li>
            <Link href="#">Privacy</Link>
          </li>
        </ul>
      </article>
    </div>
  );
};
