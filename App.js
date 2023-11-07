import React from 'react';
import {StyleSheet, View, Image, Text, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FontFamily, Border, FontSize, Color, Padding} from './src/GlobalStyles';

const App = () => {
  return (
    <View style={styles.aLobbyListing}>
      <View style={styles.frame}>
        <View style={styles.frameParent}>
          <View>
            <View style={styles.frameChild} />
            <View style={styles.catTabActiveParent}>
              <View style={styles.catTabActive}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameItem}
                    resizeMode="cover"
                    source={require('./assets/frame-1477.png')}
                  />
                  <Text style={styles.all}>All</Text>
                </View>
                <View style={styles.catTabActiveInner}>
                  <View style={styles.frameInner} />
                </View>
              </View>
              <View style={styles.catTabDefault}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameIcon}
                    resizeMode="cover"
                    source={require('./assets/frame-14771.png')}
                  />
                  <Text style={styles.steps}>Steps</Text>
                </View>
                <View style={styles.catTabDefaultInner}>
                  <View style={styles.rectangleView} />
                </View>
              </View>
              <View style={styles.catTabDefault1}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameChild1}
                    resizeMode="cover"
                    source={require('./assets/frame-34225.png')}
                  />
                  <Text style={styles.steps}>Cycling</Text>
                </View>
                <View style={styles.catTabDefaultChild}>
                  <View style={styles.frameChild2} />
                </View>
              </View>
              <View style={styles.catTabDefault2}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameChild3}
                    resizeMode="cover"
                    source={require('./assets/frame-34221.png')}
                  />
                  <Text style={styles.steps}>Running</Text>
                </View>
                <View style={styles.catTabDefaultInner1}>
                  <View style={styles.frameChild4} />
                </View>
              </View>
              <View style={styles.catTabDefault3}>
                <View style={styles.frameContainer}>
                  <Image
                    style={styles.frameItem}
                    resizeMode="cover"
                    source={require('./assets/frame-34229.png')}
                  />
                  <Text style={styles.steps}>Triathlon</Text>
                </View>
                <View style={styles.catTabDefaultInner2}>
                  <View style={styles.frameChild6} />
                </View>
              </View>
            </View>
            <View style={styles.vectorParent}>
              <Image
                style={styles.rectangleIcon}
                resizeMode="cover"
                source={require('./assets/rectangle-64.png')}
              />
              <View style={styles.frameParent4}>
                <View style={styles.frameParent5}>
                  <View style={styles.lobbyParent}>
                    <Text style={styles.lobby}>Lobby</Text>
                    <Image
                      style={styles.frameChild7}
                      resizeMode="cover"
                      source={require('./assets/frame-23.png')}
                    />
                  </View>
                  <View style={styles.frameParent6}>
                    <View style={styles.frame1}>
                      <Image
                        style={styles.frameChild8}
                        resizeMode="cover"
                        source={require('./assets/frame-34343.png')}
                      />
                      <Text style={styles.mp}>1,248 MP</Text>
                    </View>
                    <View style={styles.frame2}>
                      <Image
                        style={styles.frameChild8}
                        resizeMode="cover"
                        source={require('./assets/frame-34342.png')}
                      />
                      <Text style={styles.mp}>$289.23</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.lineView} />
                <View style={styles.frameParent7}>
                  <View style={styles.challenges24Wrapper}>
                    <Text style={styles.challenges24}>Challenges - 24</Text>
                  </View>
                  <View style={styles.rectangleParent}>
                    <View style={styles.frameChild10} />
                    <Text style={styles.tournaments03}>Tournaments - 03</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.allChallengesParent}>
            <Text style={styles.allChallenges}>All Challenges</Text>
            <View style={styles.frameParent8}>
              <View style={styles.frameWrapper}>
                <View style={styles.filter1Parent}>
                  <Image
                    style={styles.filter1Icon}
                    resizeMode="cover"
                    source={require('./assets/filter-1.png')}
                  />
                  <Text style={styles.filter}>Filter</Text>
                </View>
              </View>
              <View style={styles.frameWrapper1}>
                <View style={styles.filter1Parent}>
                  <Image
                    style={styles.filter1Icon}
                    resizeMode="cover"
                    source={require('./assets/filter-1.png')}
                  />
                  <Text style={styles.filter}>Sort by</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.challengeCardShadowBox}>
            <View style={styles.illustrationsParent}>
              <View style={styles.illustrations}>
                <Image
                  style={styles.illustrationsChild}
                  resizeMode="cover"
                  source={require('./assets/ellipse-65.png')}
                />
                <Image
                  style={styles.charectorIcon}
                  resizeMode="cover"
                  source={require('./assets/charector.png')}
                />
              </View>
              <View>
                <View style={styles.frameParent10}>
                  <View style={styles.frameParent5}>
                    <Text style={styles.allChallenges}>Walk-wave Marathon</Text>
                  </View>
                  <View style={styles.prizenewWrapper}>
                    <View style={styles.prizenew}>
                      <View style={styles.prize}>
                        <Image
                          style={styles.filter1Icon}
                          resizeMode="cover"
                          source={require('./assets/filter-1.png')}
                        />
                        <Text style={styles.k}>150K</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={styles.frameChild11} />
                  <View style={styles.fromParent}>
                    <Text style={styles.from}>From</Text>
                    <View style={styles.calendar11Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 12, 2023 to</Text>
                    </View>
                    <View style={styles.calendar12Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 18, 2023</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.challengeEntryParent}>
                  <View style={styles.frameParent11}>
                    <View style={styles.prize}>
                      <Text style={styles.entry}>Entry:</Text>
                      <Text style={styles.text1}>$50</Text>
                    </View>
                  </View>
                  <View style={styles.frameParent11}>
                    <View style={styles.stepsWrapper}>
                      <Text style={styles.steps1}>Steps</Text>
                    </View>
                    <View style={styles.kmWrapper}>
                      <Text style={styles.steps1}>30 Km</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.progressBarParent}>
                  <View style={styles.progressBar}>
                    <View style={styles.progressBarChild} />
                    <View style={styles.progressBarItem} />
                  </View>
                  <View style={styles.spotsLeftParent}>
                    <Text style={styles.from}>8,201 spots left</Text>
                    <Text style={styles.text2}>10,000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Pressable style={styles.challengeCard1} onPress={() => {}}>
            <View style={styles.illustrationsParent}>
              <View style={styles.illustrations}>
                <Image
                  style={styles.illustrationsItem}
                  resizeMode="cover"
                  source={require('./assets/ellipse-66.png')}
                />
                <Image
                  style={styles.illustrationsInner}
                  resizeMode="cover"
                  source={require('./assets/frame-34237.png')}
                />
              </View>
              <View>
                <View style={styles.frameParent10}>
                  <View style={styles.frameParent5}>
                    <Text
                      style={
                        styles.allChallenges
                      }>{`CycleCircuit Championship`}</Text>
                  </View>
                  <View style={styles.prizenewWrapper}>
                    <View style={styles.prizenew}>
                      <View style={styles.prize}>
                        <Image
                          style={styles.filter1Icon}
                          resizeMode="cover"
                          source={require('./assets/filter-1.png')}
                        />
                        <Text style={styles.k}>150K Pt</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={styles.frameChild11} />
                  <View style={styles.fromParent}>
                    <Text style={styles.from}>From</Text>
                    <View style={styles.calendar11Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 12, 2023 to</Text>
                    </View>
                    <View style={styles.calendar12Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 18, 2023</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.challengeEntryParent}>
                  <View style={styles.frameParent11}>
                    <View style={styles.prize}>
                      <Text style={styles.entry}>Entry:</Text>
                      <Text style={styles.pt}>100 Pt</Text>
                    </View>
                  </View>
                  <View style={styles.frameParent11}>
                    <View style={styles.stepsWrapper}>
                      <Text style={styles.steps1}>Steps</Text>
                    </View>
                    <View style={styles.kmWrapper}>
                      <Text style={styles.steps1}>Free</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.progressBarParent}>
                  <View style={styles.progressBar}>
                    <View style={styles.progressBarChild} />
                    <View style={styles.progressBarItem} />
                  </View>
                  <View style={styles.spotsLeftParent}>
                    <Text style={styles.from}>8,201 spots left</Text>
                    <Text style={styles.text2}>10,000</Text>
                  </View>
                </View>
              </View>
            </View>
          </Pressable>
          <View style={styles.challengeCard1}>
            <View style={styles.illustrationsParent}>
              <View style={styles.illustrations}>
                <Image
                  style={styles.ellipseIcon}
                  resizeMode="cover"
                  source={require('./assets/ellipse-651.png')}
                />
                <Image
                  style={styles.groupIcon}
                  resizeMode="cover"
                  source={require('./assets/group-14125.png')}
                />
              </View>
              <View>
                <View style={styles.frameParent16}>
                  <View style={styles.frameParent5}>
                    <Text style={styles.allChallenges}>
                      PacePioneer Pentathlon
                    </Text>
                  </View>
                  <View style={styles.prizenewFrame}>
                    <View style={styles.prizenew}>
                      <View style={styles.prize}>
                        <Image
                          style={styles.filter1Icon}
                          resizeMode="cover"
                          source={require('./assets/filter-1.png')}
                        />
                        <Text style={styles.k}>150K</Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.rectangleGroup}>
                  <View style={styles.frameChild11} />
                  <View style={styles.fromParent}>
                    <Text style={styles.from}>From</Text>
                    <View style={styles.calendar11Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 12, 2023 to</Text>
                    </View>
                    <View style={styles.calendar12Parent}>
                      <Image
                        style={styles.calendar11}
                        resizeMode="cover"
                        source={require('./assets/calendar-1-1.png')}
                      />
                      <Text style={styles.sept122023}>Sept 18, 2023</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.challengeEntryParent}>
                  <View style={styles.frameParent11}>
                    <View style={styles.prize}>
                      <Text style={styles.entry}>Entry:</Text>
                      <Text style={styles.text1}>$50</Text>
                    </View>
                  </View>
                  <View style={styles.frameParent11}>
                    <View style={styles.stepsWrapper}>
                      <Text style={styles.steps1}>Steps</Text>
                    </View>
                    <View style={styles.kmWrapper}>
                      <Text style={styles.steps1}>25 Km</Text>
                    </View>
                  </View>
                </View>
                <View style={styles.progressBarParent}>
                  <View style={styles.progressBar}>
                    <View style={styles.progressBarChild} />
                    <View style={styles.progressBarItem} />
                  </View>
                  <View style={styles.spotsLeftParent}>
                    <Text style={styles.from}>8,201 spots left</Text>
                    <Text style={styles.text2}>10,000</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.frameIcon1}
          resizeMode="cover"
          source={require('./assets/frame.png')}
        />
      </View>
      <View style={styles.aLobbyListingInner}>
        <View style={styles.frameParent5}>
          <View style={styles.frameParent5}>
            <Pressable style={styles.vectorWrapper} onPress={() => {}}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require('./assets/vector.png')}
              />
            </Pressable>
            <LinearGradient
              style={styles.frameLineargradient}
              locations={[0, 1]}
              colors={['#6655f1', '#3e2cd1']}
              useAngle={true}
              angle={127.23}>
              <View style={styles.wrapperLayout}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require('./assets/union.png')}
                />
              </View>
              <Text style={styles.lobby1}>Lobby</Text>
            </LinearGradient>
          </View>
          <View style={styles.frameParent20}>
            <View style={styles.vectorWrapper}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require('./assets/vector1.png')}
              />
            </View>
            <Pressable style={styles.vectorWrapper} onPress={() => {}}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require('./assets/union1.png')}
              />
            </Pressable>
            <Pressable style={styles.unionFrame} onPress={() => {}}>
              <Image
                style={styles.vectorIcon}
                resizeMode="cover"
                source={require('./assets/union2.png')}
              />
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  // vectorIconLayout: {
  //   width: '100%',
  //   flex: 1,
  //   overflow: 'hidden',
  // },
  // kTypo: {
  //   fontFamily: FontFamily.jostMedium,
  //   fontWeight: '500',
  // },
  // catInnerSpaceBlock: {
  //   marginTop: 6,
  //   justifyContent: 'center',
  // },
  // frameChildLayout: {
  //   height: 2,
  //   borderRadius: Border.br_3xs,
  // },
  // mpTypo: {
  //   fontFamily: FontFamily.jostRegular,
  //   textAlign: 'left',
  //   fontSize: FontSize.size_xs,
  // },
  // sept122023Position: {
  //   top: 0,
  //   position: 'absolute',
  // },
  // parentFrameFlexBox: {
  //   justifyContent: 'flex-end',
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // frameFlexBox1: {
  //   height: 17,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // parentFlexBox: {
  //   width: 358,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  // frameChild10Layout: {
  //   width: 179,
  //   height: 32,
  //   borderRadius: Border.br_31xl,
  //   backgroundColor: Color.colorPrimary50,
  // },
  // text1Typo: {
  //   color: Color.colorPurplegrey700,
  //   fontFamily: FontFamily.jostMedium,
  //   fontWeight: '500',
  // },
  // filter1ParentSpaceBlock: {
  //   paddingHorizontal: Padding.p_5xs,
  //   flexDirection: 'row',
  // },
  // fromParentPosition: {
  //   left: 8,
  //   position: 'absolute',
  // },
  iconPosition: {
    marginLeft: 10,
    zIndex: 1,
  },
  // prizenewSpaceBlock: {
  //   paddingVertical: Padding.p_8xs,
  //   borderRadius: Border.br_9xs,
  // },
  // fromTypo: {
  //   fontSize: FontSize.size_3xs,
  //   fontFamily: FontFamily.jostRegular,
  // },
  // wrapperSpaceBlock: {
  //   paddingVertical: Padding.p_12xs,
  //   paddingHorizontal: Padding.p_9xs,
  //   backgroundColor: Color.colorPrimary100,
  //   borderRadius: Border.br_10xs,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   overflow: 'hidden',
  // },
  // progressPosition: {
  //   height: 5,
  //   top: 1,
  //   borderRadius: Border.br_3xs,
  //   left: 0,
  //   position: 'absolute',
  // },
  challengeCardShadowBox: {
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    elevation: 14,
    shadowRadius: 14,
    shadowColor: 'rgba(0, 0, 0, 0.02)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite700,
  },
  wrapperLayout: {
    width: 20,
    height: 20,
  },
  // frameFlexBox: {
  //   marginLeft: 30,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  // },
  frameChild: {
    height: 171,
    zIndex: 0,
    backgroundColor: Color.colorWhite700,
    width: 390,
  },
  frameItem: {
    height: 24,
    width: 24,
  },
  all: {
    marginLeft: 8,
    textAlign: 'left',
    color: Color.colorPrimary700,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  frameContainer: {
    paddingHorizontal: Padding.p_7xs,
    paddingVertical: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameInner: {
    backgroundColor: Color.colorPrimary700,
    width: 59,
    height: 2,
    borderRadius: Border.br_3xs,
  },
  catTabActiveInner: {
    width: 59,
    marginTop: 6,
    justifyContent: 'center',
  },
  catTabActive: {
    justifyContent: 'center',
    width: 59,
  },
  frameIcon: {
    width: 25,
    height: 29,
  },
  steps: {
    color: Color.colorPurplegrey500,
    marginLeft: 8,
    fontFamily: FontFamily.jostRegular,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  rectangleView: {
    width: 72,
    backgroundColor: Color.colorWhite700,
    height: 2,
    borderRadius: Border.br_3xs,
  },
  catTabDefaultInner: {
    width: 72,
    marginTop: 6,
    justifyContent: 'center',
  },
  catTabDefault: {
    width: 72,
    marginLeft: 8,
    justifyContent: 'center',
  },
  frameChild1: {
    width: 27,
    height: 27,
  },
  frameChild2: {
    width: 83,
    backgroundColor: Color.colorWhite700,
    height: 2,
    borderRadius: Border.br_3xs,
  },
  catTabDefaultChild: {
    width: 83,
    marginTop: 6,
    justifyContent: 'center',
  },
  catTabDefault1: {
    width: 83,
    marginLeft: 8,
    justifyContent: 'center',
  },
  frameChild3: {
    height: 29,
    width: 24,
  },
  frameChild4: {
    width: 86,
    backgroundColor: Color.colorWhite700,
    height: 2,
    borderRadius: Border.br_3xs,
  },
  catTabDefaultInner1: {
    width: 86,
    marginTop: 6,
    justifyContent: 'center',
  },
  catTabDefault2: {
    width: 86,
    marginLeft: 8,
    justifyContent: 'center',
  },
  frameChild6: {
    width: 87,
    backgroundColor: Color.colorWhite700,
    height: 2,
    borderRadius: Border.br_3xs,
  },
  catTabDefaultInner2: {
    width: 87,
    marginTop: 6,
    justifyContent: 'center',
  },
  catTabDefault3: {
    width: 87,
    marginLeft: 8,
    justifyContent: 'center',
  },
  catTabActiveParent: {
    top: 139,
    paddingLeft: 16,
    zIndex: 1,
    left: 0,
    position: 'absolute',
    flexDirection: 'row',
    width: 390,
  },
  rectangleIcon: {
    height: 131,
    zIndex: 0,
    width: 390,
  },
  lobby: {
    fontSize: 16,
    color: Color.colorWhite700,
    textAlign: 'left',
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  frameChild7: {
    width: 14,
    marginLeft: 7,
    height: 14,
  },
  lobbyParent: {
    height: 23,
    width: 64,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameChild8: {
    width: 16,
    height: 16,
  },
  mp: {
    marginLeft: 4,
    color: Color.colorWhite700,
    fontFamily: FontFamily.jostRegular,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  frame1: {
    width: 70,
    overflow: 'hidden',
    height: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frame2: {
    marginLeft: 16,
    width: 64,
    overflow: 'hidden',
    height: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameParent6: {
    width: 150,
    marginLeft: 144,
    height: 17,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameParent5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lineView: {
    borderColor: Color.colorPrimary50,
    borderTopWidth: 1,
    width: 391,
    height: 1,
    opacity: 0.2,
    marginTop: 12,
    borderStyle: 'solid',
  },
  challenges24: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.colorPrimary700,
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  challenges24Wrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 179,
    height: 32,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPrimary50,
  },
  frameChild10: {
    top: 6,
    left: 36,
    display: 'none',
    position: 'absolute',
    width: 179,
    height: 32,
    borderRadius: Border.br_31xl,
    backgroundColor: Color.colorPrimary50,
  },
  tournaments03: {
    marginTop: -10,
    top: '50%',
    color: Color.colorPrimary100,
    textAlign: 'center',
    fontSize: FontSize.size_sm,
    left: 0,
    position: 'absolute',
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  rectangleParent: {
    width: 110,
    marginLeft: 36,
    height: 20,
  },
  frameParent7: {
    height: 32,
    borderRadius: Border.br_31xl,
    width: 358,
    marginTop: 12,
    backgroundColor: Color.colorPrimary700,
    flexDirection: 'row',
    alignItems: 'center',
  },
  frameParent4: {
    top: 40,
    zIndex: 1,
    left: 0,
    position: 'absolute',
    alignItems: 'center',
  },
  vectorParent: {
    zIndex: 2,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  allChallenges: {
    fontSize: FontSize.size_sm,
    textAlign: 'left',
    color: Color.colorPurplegrey700,
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  filter1Icon: {
    width: 12,
    height: 12,
    overflow: 'hidden',
  },
  filter: {
    lineHeight: 12,
    marginLeft: 4,
    color: Color.colorPurplegrey500,
    fontFamily: FontFamily.jostRegular,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  filter1Parent: {
    borderColor: Color.colorPurplegrey300,
    borderWidth: 0.5,
    paddingVertical: Padding.p_7xs,
    borderRadius: Border.br_9xs,
    paddingHorizontal: Padding.p_5xs,
    borderStyle: 'solid',
    justifyContent: 'center',
    backgroundColor: Color.colorWhite700,
    alignItems: 'center',
    flexDirection: 'row',
  },
  frameWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  frameWrapper1: {
    width: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frameParent8: {
    width: 134,
    height: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allChallengesParent: {
    marginTop: 16,
    marginBottom: 10,
    justifyContent: 'space-between',
    width: 358,
    flexDirection: 'row',
    alignItems: 'center',
  },
  illustrationsChild: {
    bottom: 0,
    width: 103,
    height: 32,
    zIndex: 0,
    left: 8,
    position: 'absolute',
  },
  charectorIcon: {
    height: 102,
    width: 74,
    marginLeft: 10,
    zIndex: 1,
  },
  illustrations: {
    width: 103,
    paddingVertical: 0,
    paddingHorizontal: Padding.p_5xs,
    flexDirection: 'row',
  },
  k: {
    marginLeft: 2,
    lineHeight: 14,
    color: Color.colorWhite700,
    textAlign: 'left',
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  prize: {
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  prizenew: {
    backgroundColor: Color.colorPurplegrey900,
    paddingVertical: Padding.p_8xs,
    paddingHorizontal: Padding.p_5xs,
    height: 24,
    justifyContent: 'center',
    alignItems: 'flex-end',
    borderRadius: Border.br_9xs,
  },
  prizenewWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  frameParent10: {
    width: 233,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  frameChild11: {
    backgroundColor: Color.colorPurplegrey50,
    borderRadius: Border.br_10xs,
    width: 233,
    height: 24,
    zIndex: 0,
  },
  from: {
    color: Color.colorPurplegrey500,
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  calendar11: {
    width: 10,
    height: 10,
    top: 1,
    left: 0,
    position: 'absolute',
    overflow: 'hidden',
  },
  sept122023: {
    left: 14,
    top: 0,
    position: 'absolute',
    color: Color.colorPurplegrey500,
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  calendar11Parent: {
    width: 89,
    height: 14,
    marginLeft: 8,
  },
  calendar12Parent: {
    width: 75,
    height: 14,
    marginLeft: 8,
  },
  fromParent: {
    top: 5,
    zIndex: 1,
    flexDirection: 'row',
    left: 8,
    position: 'absolute',
  },
  rectangleGroup: {
    marginTop: 12,
  },
  entry: {
    color: Color.colorPurplegrey300,
    lineHeight: 14,
    textAlign: 'left',
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  text1: {
    textAlign: 'right',
    lineHeight: 14,
    marginLeft: 4,
    fontSize: FontSize.size_xs,
    color: Color.colorPurplegrey700,
    fontFamily: FontFamily.jostMedium,
    fontWeight: '500',
  },
  challengeEntry: {
    paddingHorizontal: 0,
    alignItems: 'flex-end',
    height: 14,
    backgroundColor: Color.colorWhite700,
    justifyContent: 'space-between',
    paddingVertical: Padding.p_8xs,
    borderRadius: Border.br_9xs,
  },
  steps1: {
    lineHeight: 12,
    textAlign: 'center',
    color: Color.colorPrimary700,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  stepsWrapper: {
    justifyContent: 'center',
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.colorPrimary100,
    borderRadius: Border.br_10xs,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  kmWrapper: {
    marginLeft: 8,
    paddingVertical: Padding.p_12xs,
    paddingHorizontal: Padding.p_9xs,
    backgroundColor: Color.colorPrimary100,
    borderRadius: Border.br_10xs,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  frameParent11: {
    width: 84,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeEntryParent: {
    width: 233,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressBarChild: {
    backgroundColor: Color.colorPrimary100,
    height: 5,
    width: 233,
    top: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    position: 'absolute',
  },
  progressBarItem: {
    width: 67,
    backgroundColor: Color.colorPrimary700,
    height: 5,
    top: 1,
    borderRadius: Border.br_3xs,
    left: 0,
    position: 'absolute',
  },
  progressBar: {
    height: 7,
    width: 233,
  },
  text2: {
    textAlign: 'right',
    color: Color.colorPurplegrey500,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  spotsLeftParent: {
    marginTop: 4,
    width: 233,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: -8,
  },
  progressBarParent: {
    marginTop: 12,
  },
  illustrationsParent: {
    width: 346,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  illustrationsItem: {
    top: 41,
    left: 23,
    width: 62,
    height: 56,
    position: 'absolute',
    zIndex: 0,
  },
  illustrationsInner: {
    height: 87,
    width: 103,
    zIndex: 1,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  // prizenew1: {
  //   backgroundColor: Color.colorPurplegrey900,
  //   paddingVertical: Padding.p_8xs,
  //   paddingHorizontal: Padding.p_5xs,
  //   height: 24,
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  pt: {
    color: Color.colorTertiaryTeal900,
    textAlign: 'right',
    lineHeight: 14,
    marginLeft: 4,
    fontSize: FontSize.size_xs,
  },
  challengeCard1: {
    marginTop: 16,
    paddingBottom: Padding.p_xs,
    paddingRight: Padding.p_xs,
    paddingTop: Padding.p_xs,
    elevation: 14,
    shadowRadius: 14,
    shadowColor: 'rgba(0, 0, 0, 0.02)',
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorWhite700,
  },
  ellipseIcon: {
    top: 29,
    left: 6,
    width: 88,
    height: 78,
    position: 'absolute',
    zIndex: 0,
  },
  groupIcon: {
    height: 107,
    width: 86,
    marginLeft: 10,
    zIndex: 1,
  },
  prizenewFrame: {
    marginLeft: 32,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  frameParent16: {
    width: 233,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  // challengeCard2: {
  //   marginTop: 16,
  //   paddingBottom: Padding.p_xs,
  //   paddingRight: Padding.p_xs,
  //   paddingTop: Padding.p_xs,
  //   elevation: 14,
  //   shadowRadius: 14,
  //   shadowColor: 'rgba(0, 0, 0, 0.02)',
  //   shadowOpacity: 1,
  //   shadowOffset: {
  //     width: 0,
  //     height: 4,
  //   },
  //   borderRadius: Border.br_9xs,
  //   backgroundColor: Color.colorWhite700,
  // },
  // challengeCardParent: {
  //   marginTop:,
  // },
  frameParent: {
    alignItems: 'center',
  },
  frameIcon1: {
    width: 374,
    height: 765,
  },
  frame: {
    height: 736,
    flexDirection: 'row',
    width: 390,
    justifyContent: 'space-between',
  },
  vectorIcon: {
    alignSelf: 'stretch',
    maxWidth: '100%',
    maxHeight: '100%',
    overflow: 'hidden',
    width: '100%',
    flex: 1,
  },
  vectorWrapper: {
    flexDirection: 'row',
    width: 20,
    height: 20,
  },
  lobby1: {
    textAlign: 'right',
    marginLeft: 4,
    color: Color.colorWhite700,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.jostRegular,
  },
  frameLineargradient: {
    borderRadius: 28,
    height: 36,
    paddingHorizontal: Padding.p_xs,
    paddingVertical: Padding.p_5xs,
    backgroundColor: 'transparent',
    width: 74,
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  unionFrame: {
    width: 21,
    paddingHorizontal: 3,
    height: 20,
    paddingVertical: 0,
    flexDirection: 'row',
  },
  frameParent20: {
    width: 157,
    justifyContent: 'space-between',
    marginLeft: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  aLobbyListingInner: {
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    shadowRadius: 19,
    elevation: 19,
    height: 60,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    width: 358,
    borderRadius: Border.br_31xl,
    justifyContent: 'center',
    backgroundColor: Color.colorWhite700,
    alignItems: 'center',
  },
  aLobbyListing: {
    height: 828,
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: Color.colorPrimary50,
    flex: 1,
    width: '100%',
  },
});
