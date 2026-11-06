import type { Metadata } from 'next';
import Link from 'next/link';
import { EMAIL } from '@/components/Contact';

const title = 'Strongroom privacy policy';
const description =
  'What the Strongroom Chrome extension stores, what it reads in your browser, and what it sends when you turn on sync.';

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/strongroom/privacy' },
  openGraph: { title, description, url: '/strongroom/privacy', type: 'website' },
};

export default function StrongroomPrivacyPage() {
  return (
    <>
      <h1>Strongroom privacy policy</h1>
      <p>Last updated 6 November 2026.</p>
      <p>
        Strongroom is a password manager extension for Google Chrome. I am
        Haroon Mukhtar, an individual developer based in Islamabad, Pakistan,
        and I make it. This page explains what the extension does with your
        data. The extension itself is described on the{' '}
        <Link href='/strongroom'>Strongroom page</Link>.
      </p>

      <h2>The short version</h2>
      <p>
        Strongroom keeps your logins on your computer. Unless you turn on sync,
        the extension makes no network requests, so I receive nothing from it:
        no logins, no browsing history, no usage statistics and no crash
        reports. If you turn on sync, only encrypted data leaves your browser,
        and it goes to the vault server described below. I do not sell your
        data or share it with anyone.
      </p>

      <h2>What Strongroom stores and where</h2>
      <ul>
        <li>
          <strong>Your logins.</strong> Names, website addresses, usernames,
          passwords and notes that you type or import. They are encrypted with
          a key made from your master password and stored in your Chrome
          profile (chrome.storage.local, which Chrome does not sync to other
          devices). The master password itself is never stored.
        </li>
        <li>
          <strong>The unlocked vault key.</strong>{' '}
          While the vault is unlocked, the key is kept in the extension&apos;s session memory
          (chrome.storage.session). It is cleared when the vault locks, which
          happens after 5 minutes without use, when you press Lock and when you
          close the browser.
        </li>
        <li>
          <strong>A sign-in waiting to be saved.</strong> When you submit a
          sign-in form, Strongroom reads the username and password you typed
          and holds them in session memory so the toolbar popup can offer to
          save them. The offer expires after 5 minutes, and anything left is
          cleared when the vault locks or the browser closes. They reach your
          vault only if you choose Save or Update.
        </li>
        <li>
          <strong>Sync details, only if you sign in to sync.</strong> Your
          account key and the sync state (when it last synced and how many
          items it couldn&apos;t sync) are stored in chrome.storage.local. The
          sign-in token for the vault server is kept in session memory and
          cleared when the vault locks.
        </li>
      </ul>

      <h2>What Strongroom reads in your browser</h2>
      <ul>
        <li>
          <strong>Sign-in forms.</strong> A small script runs on http and
          https pages to find login fields. It shows a suggestion under a
          field when you have a login saved for that site, and it fills the
          login only after you click it. It reads login fields and nothing
          else on the page.
        </li>
        <li>
          <strong>The address of the page.</strong>{' '}
          Strongroom compares the site&apos;s address with the sites saved in your vault, to suggest
          the right login and to keep it from filling on a look-alike address.
          The popup reads the address of the current tab when you click the
          toolbar icon.
        </li>
        <li>
          <strong>Files you import.</strong> When you import a Google Password
          Manager export, the extension reads the file in your browser and does
          not keep it. The export holds your passwords in plain text, so delete
          it after importing.
        </li>
      </ul>

      <h2>Sync</h2>
      <p>
        Sync is off until you sign in with a Strongroom account, using your
        master password and the account key that the Strongroom Android app
        shows when it creates the account. Once you are signed in, the
        extension syncs when you unlock the vault, every 5 minutes while it
        stays unlocked, and when you choose Sync now.
      </p>
      <p>
        The vault server is a Cloudflare Worker with a database on my personal
        Cloudflare account, at strongroom-vault.haroonmukhtar4.workers.dev.
        Strongroom is a personal project, and that server holds one account:
        mine.
      </p>
      <p>When sync is on, the extension sends the vault server:</p>
      <ul>
        <li>
          Your logins, each encrypted with AES-256-GCM in your browser before
          it is sent, with a random ID. Deleting a login sends an encrypted
          deletion marker.
        </li>
        <li>
          The vault header: the key-derivation settings, a random salt, and
          the vault key encrypted under your master password and under your
          recovery key.
        </li>
        <li>
          Hashes of access tokens derived from your master password and account
          key, which the server uses to check that a request comes from you.
        </li>
      </ul>
      <p>
        So the server sees record IDs, sizes and timestamps, never names,
        sites, usernames or passwords. Your master password, account key and
        recovery key never leave your devices.
      </p>
      <p>
        If you try to sign in without an account on that server, the extension
        sends a token derived from what you typed. The server refuses it and
        keeps nothing from the attempt except a count of failed sign-ins.
      </p>
      <p>
        Cloudflare hosts the server and handles each request, including your
        IP address, under its own privacy policy. I have added no logging or
        analytics to the server.
      </p>

      <h2>What Strongroom does not do</h2>
      <ul>
        <li>
          It sends nothing anywhere unless you turn on sync, and then only the
          encrypted data listed above, to the vault server.
        </li>
        <li>It contains no analytics and no advertising code.</li>
        <li>
          It does not sell or share your data, and it uses it for nothing
          except filling, saving and syncing your logins.
        </li>
        <li>
          It does not download or run code from the internet. All of its code
          is in the package you install.
        </li>
      </ul>

      <h2>Why each permission is needed</h2>
      <ul>
        <li>
          <strong>storage</strong> keeps your encrypted vault and the
          short-lived session data described above.
        </li>
        <li>
          <strong>alarms</strong> runs the 5-minute timer that locks the vault,
          and the 5-minute sync timer when sync is on.
        </li>
        <li>
          <strong>activeTab</strong>{' '}
          lets the popup read the current tab&apos;s address and fill a login into that tab when you click the
          toolbar icon.
        </li>
        <li>
          <strong>Access to http and https pages</strong> lets the sign-in
          script run on the sites you use.
        </li>
        <li>
          <strong>Access to strongroom-vault.haroonmukhtar4.workers.dev</strong>{' '}
          lets the extension reach the vault server once you sign in to sync.
        </li>
      </ul>

      <h2>Encryption</h2>
      <p>
        Logins are encrypted with AES-256-GCM. The key is derived from your
        master password with Argon2id, and with sync also from your account
        key. Without your master password or your recovery key, the vault
        cannot be opened, by anyone, including me and Cloudflare.
      </p>

      <h2>If you lose your master password</h2>
      <p>
        At setup Strongroom shows a recovery key once. With the recovery key
        you can set a new master password. If you lose both, your logins cannot
        be recovered by you or by me, because I have no copy I can read.
      </p>

      <h2>Deleting your data</h2>
      <p>
        Delete a login in Strongroom to remove it from your vault. With sync
        on, the deletion reaches the vault server and your other devices.
        Removing the extension from Chrome removes everything it stored in your
        profile. Strongroom has no export feature yet, so without sync,
        removing it deletes your logins for good. Copy what you still need
        first.
      </p>

      <h2>Chrome Web Store user data policy</h2>
      <p>
        Strongroom&apos;s use of data follows the Chrome Web Store User Data
        Policy, including the Limited Use requirements.
      </p>

      <h2>Changes</h2>
      <p>
        This page was updated on 6 November 2026 to describe sync. If a later
        version sends anything else off your computer, I will update this page
        before that version is released and describe the change in the
        extension&apos;s release notes. The date at the top shows when this
        page last changed.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
      </p>
    </>
  );
}
