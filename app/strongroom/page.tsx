import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL } from '@/components/Contact';

const title = 'Strongroom · Password manager for Chrome';
const description =
  'Strongroom is a Chrome extension that keeps your logins in an encrypted vault on your own computer, with optional encrypted sync to the Strongroom Android app.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/strongroom' },
  openGraph: { title, description, url: '/strongroom', type: 'website' },
};

export default function StrongroomPage() {
  return (
    <>
      <p className='font-mono text-xs uppercase tracking-[0.25em] text-accent'>
        Chrome extension
      </p>
      <h1 className='mt-3'>Strongroom</h1>
      <p className='lead'>
        A password manager for Chrome that keeps your logins on your own
        computer.
      </p>

      <h2>What it does</h2>
      <ul>
        <li>
          Fills a sign-in when you click a login field on a site you saved a
          login for. Nothing fills until you click.
        </li>
        <li>
          Offers to save a login after you sign in, and to update it when the
          password changes.
        </li>
        <li>Imports the export file from Google Password Manager.</li>
        <li>
          Locks itself after 5 minutes without use and when you close the
          browser.
        </li>
      </ul>

      <h2>Your data</h2>
      <p>
        Your logins are encrypted with your master password and stored in your
        Chrome profile. Until you turn on sync, the extension makes no network
        requests, and the developer receives nothing from it. Read the{' '}
        <Link href='/strongroom/privacy'>privacy policy</Link> for the details.
      </p>

      <h2>Sync</h2>
      <p>
        Strongroom can sync with the Strongroom Android app, so the same
        logins are on the phone and in Chrome. Sync goes through a vault server
        I run on my own Cloudflare account. Every login is encrypted before it
        leaves the browser, so the server sees record IDs, sizes and
        timestamps, never names, sites, usernames or passwords.
      </p>
      <p>
        Strongroom is a personal project, and that server holds one account:
        mine. If you install the extension, use it without sync. Your vault
        stays in your Chrome profile and works the same way.
      </p>

      <h2>Requirements</h2>
      <p>Chrome 127 or later on Mac or Windows.</p>

      <h2 id='support'>Support</h2>
      <p>
        Email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> with questions or bug
        reports. Include your Chrome version and what you clicked. Never send
        your master password, your recovery key or an exported password file.
      </p>

      <h3>I forgot my master password</h3>
      <p>
        Choose Forgot master password on the unlock screen and enter your
        recovery key. If you have neither, the logins cannot be recovered, by
        you or by me.
      </p>

      <h3>How do I move my logins from Google?</h3>
      <p>
        In Google Password Manager open Settings and choose Export passwords.
        In Strongroom choose Import and pick the file. Delete the file
        afterwards, because it holds your passwords in plain text.
      </p>

      <h3>Why does it ask to run on all websites?</h3>
      <p>
        It has to see the sign-in fields of any site you use. It reads login
        fields only and sends nothing anywhere.
      </p>

      <h3>Does it sync between devices?</h3>
      <p>
        Yes, with the Strongroom Android app, after you sign in with your
        master password and the account key the phone app shows when it
        creates the account. The sync server I run holds only my own account,
        so for anyone else each browser profile keeps its own vault.
      </p>
    </>
  );
}
