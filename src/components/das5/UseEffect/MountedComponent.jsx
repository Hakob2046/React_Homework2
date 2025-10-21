import React, { useEffect } from 'react';

function MountedComponent() {
  useEffect(() => {
    console.log('Կոմպոնենտը մոնտաժվեց (Mounted)');
    return () => {
      console.log('Կոմպոնենտը ապամոնտաժվեց (Unmounted)');
    };
  }, []); // Դատարկ զանգված նշանակում է՝ աշխատեցնել միայն մեկ անգամ

  return <p>Սա կոմպոնենտ է, որը մոնտաժվել է։</p>;
}
export default MountedComponent;