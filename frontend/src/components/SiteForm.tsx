import React from 'react';

type SiteFormProps = {
  siteName: string;
  setSiteName: (value: string) => void;
  siteStatus: string;
  setSiteStatus: (value: string) => void;
  handleAddSite: React.SubmitEventHandler<HTMLFormElement>;
};

const SiteForm = ({
  siteName,
  setSiteName,
  siteStatus,
  setSiteStatus,
  handleAddSite,
}: SiteFormProps) => {
  return (
    <form
      onSubmit={handleAddSite}
      style={{
        padding: '1rem',
        borderRadius: '8px',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center',
        border: '1px solid #333',
        marginBottom: '2rem',
      }}
    >
      <input
        value={siteName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSiteName(e.target.value)
        }
        placeholder="Site name"
        style={{
          border: '1px solid #666',
          padding: '0.5rem',
          borderRadius: '4px',
          flex: 1,
        }}
      />

      <input
        value={siteStatus}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSiteStatus(e.target.value)
        }
        placeholder="Status"
        style={{
          border: '1px solid #666',
          padding: '0.5rem',
          borderRadius: '4px',
          flex: 1,
        }}
      />

      <button
        type="submit"
        style={{
          backgroundColor: '#333',
          color: 'white',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add
      </button>
    </form>
  );
};

export default SiteForm;
