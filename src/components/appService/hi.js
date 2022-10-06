// for (let i = 0; i < markers.length; i++) {
//   let key: string = String(markers[i].num);
//   if (markers[i].category_group_name === '음식점') {
//     const imgSrc = '/img/AppPage/restaurant.png';
//     const category = '음식점';
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       title: key,
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/restaurant.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">음식점</p></div>',
//         anchor: new naver.maps.Point(18, 30),
//       },
//     });
//     markerClickEvent({ map, otherMarkers, i, imgSrc, category });
//   }
//   if (markers[i].category_group_name === '편의점') {
//     const imgSrc = '/img/AppPage/store.png';
//     const category = '편의점';
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       title: key,
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/convenienceStore.png"; alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">편의점</p></div>',
//         // anchor: new naver.maps.Point(32, 30),
//       },
//     });
//     markerClickEvent({ map, otherMarkers, i, imgSrc, category });
//   }
//   if (markers[i].category_group_name === '카페') {
//     const imgSrc = 'img/AppPage/cafe.png';
//     const category = '카페';
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       title: key,
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/cafe.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">카페</p></div>',
//       },
//     });
//     markerClickEvent({ map, otherMarkers, i, imgSrc, category });
//   }
//   if (markers[i].category_group_name === '마트') {
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/mart.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">마트</p></div>',
//       },
//     });
//   }
//   if (markers[i].category_group_name === '병원') {
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/hospital.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">병원</p></div>',
//       },
//     });
//   }
//   if (markers[i].category_group_name === '주유소') {
//     const otherMarkers = new naver.maps.Marker({
//       position: new naver.maps.LatLng(markers[i].y, markers[i].x),
//       map,
//       icon: {
//         content:
//           '<div style="text-align: center;"><img src="/img/AppPage/Marker/gasStation.png" alt="markerImg" /><p style="text-shadow: 1px 0 white, 1px 0 white, 1px 0 white, 1px 0 white; font-size: 13px;">주유소</p></div>',
//       },
//     });
//   }
// }
