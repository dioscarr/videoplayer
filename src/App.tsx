import React, { useState } from 'react';
import styles from './App.module.scss';

import { FocusStyleManager } from '@blueprintjs/core';

import { NavigationBar } from './components/navigation-bar/navigation-bar';
import { CoreExample } from './components/core-example/core-example';
import { SelectExample } from './components/select-example/select-example';
import { DatetimeExample } from './components/datetime-example/datetime-example';
import { Popover2Example } from './components/popover2-example/popover2-example';
import Classnames from 'classnames';

FocusStyleManager.onlyShowFocusOnTabs();

function App() {
    const [currentPlayerSrc, setCurrentPlayerSrc] = useState<string>(
        'https://wixplosives.github.io/codux-assets-storage/add-panel/video-placeholder.mp4'
    );
    const goto = (url: string) => {
        setCurrentPlayerSrc(url);
    };
    return (
        <div className={styles.App}>
            <div className={styles.Main}>
                <div className={styles.Header}>
                    <div className={styles.PlayerPrevius} />
                    <div className={styles['Main-Playlist']}>
                        <video
                            controls={true}
                            src={currentPlayerSrc}
                            className={styles.video}
                        />
                    </div>
                    <div className={styles.PlayerNext}></div>
                </div>
                <div
                    style={{
                        gridRow: 1,
                        gridColumn: 1,
                        alignSelf: 'end',
                        zIndex: 1,
                        backgroundColor: '#162427',
                        display: 'grid',
                        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                    }}
                    className={styles.PlayListMenu}
                >
                    <div
                        onMouseOver={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                            )
                        }
                        onClick={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4'
                            )
                        }
                    >
                        A
                    </div>
                    <div
                        onMouseOver={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4'
                            )
                        }
                    >
                        B
                    </div>
                    <div
                        onMouseOver={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4'
                            )
                        }
                    >
                        C
                    </div>
                    <div
                        onMouseOver={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4'
                            )
                        }
                    >
                        D
                    </div>
                    <div
                        onMouseOver={() =>
                            goto(
                                'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4'
                            )
                        }
                    >
                        E
                    </div>
                </div>
            </div>
            <div className={styles.FeatureBox}>
                <img
                    src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                    className={styles.FeatureImg}
                />
                <h1>Fire Under Control</h1>
            </div>
        </div>
    );
}

export default App;
