export const getMockESReponse = () => (
  {
    took: 8,
    timed_out: false,
    _shards: {
      total: 1,
      successful: 1,
      skipped: 0,
      failed: 0
    },
    hits: {
      total: {
        value: 2186,
        relation: "eq"
      },
      max_score: null,
      hits: []
    },
    aggregations: {
      carrier: {
        doc_count_error_upper_bound: 0,
        sum_other_doc_count: 534,
        buckets: [
          {
            key: "Logstash Airways",
            doc_count: 562,
            date: {
              buckets: [
                {
                  key_as_string: "2022-02-25T15:00:00.000-06:00",
                  key: 1645822800000,
                  doc_count: 3
                },
                {
                  key_as_string: "2022-02-25T18:00:00.000-06:00",
                  key: 1645833600000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-02-25T21:00:00.000-06:00",
                  key: 1645844400000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-26T00:00:00.000-06:00",
                  key: 1645855200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-26T03:00:00.000-06:00",
                  key: 1645866000000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-26T06:00:00.000-06:00",
                  key: 1645876800000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-26T09:00:00.000-06:00",
                  key: 1645887600000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-26T12:00:00.000-06:00",
                  key: 1645898400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-26T15:00:00.000-06:00",
                  key: 1645909200000,
                  doc_count: 17
                },
                {
                  key_as_string: "2022-02-26T18:00:00.000-06:00",
                  key: 1645920000000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-26T21:00:00.000-06:00",
                  key: 1645930800000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-27T00:00:00.000-06:00",
                  key: 1645941600000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-27T03:00:00.000-06:00",
                  key: 1645952400000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-27T06:00:00.000-06:00",
                  key: 1645963200000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-27T09:00:00.000-06:00",
                  key: 1645974000000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-27T12:00:00.000-06:00",
                  key: 1645984800000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-02-27T15:00:00.000-06:00",
                  key: 1645995600000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-27T18:00:00.000-06:00",
                  key: 1646006400000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-02-27T21:00:00.000-06:00",
                  key: 1646017200000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-02-28T00:00:00.000-06:00",
                  key: 1646028000000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-28T03:00:00.000-06:00",
                  key: 1646038800000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-28T06:00:00.000-06:00",
                  key: 1646049600000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-28T09:00:00.000-06:00",
                  key: 1646060400000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-28T12:00:00.000-06:00",
                  key: 1646071200000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-28T15:00:00.000-06:00",
                  key: 1646082000000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-28T18:00:00.000-06:00",
                  key: 1646092800000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-28T21:00:00.000-06:00",
                  key: 1646103600000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-03-01T00:00:00.000-06:00",
                  key: 1646114400000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-01T03:00:00.000-06:00",
                  key: 1646125200000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-01T06:00:00.000-06:00",
                  key: 1646136000000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-03-01T09:00:00.000-06:00",
                  key: 1646146800000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-01T12:00:00.000-06:00",
                  key: 1646157600000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-01T15:00:00.000-06:00",
                  key: 1646168400000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-03-01T18:00:00.000-06:00",
                  key: 1646179200000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-03-01T21:00:00.000-06:00",
                  key: 1646190000000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-02T00:00:00.000-06:00",
                  key: 1646200800000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-02T03:00:00.000-06:00",
                  key: 1646211600000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-02T06:00:00.000-06:00",
                  key: 1646222400000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-02T09:00:00.000-06:00",
                  key: 1646233200000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-02T12:00:00.000-06:00",
                  key: 1646244000000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-02T15:00:00.000-06:00",
                  key: 1646254800000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-02T18:00:00.000-06:00",
                  key: 1646265600000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-03-02T21:00:00.000-06:00",
                  key: 1646276400000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-03-03T00:00:00.000-06:00",
                  key: 1646287200000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-03T03:00:00.000-06:00",
                  key: 1646298000000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-03T06:00:00.000-06:00",
                  key: 1646308800000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-03T09:00:00.000-06:00",
                  key: 1646319600000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-03T12:00:00.000-06:00",
                  key: 1646330400000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-03T15:00:00.000-06:00",
                  key: 1646341200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-03T18:00:00.000-06:00",
                  key: 1646352000000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-03-03T21:00:00.000-06:00",
                  key: 1646362800000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-04T00:00:00.000-06:00",
                  key: 1646373600000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-04T03:00:00.000-06:00",
                  key: 1646384400000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-04T06:00:00.000-06:00",
                  key: 1646395200000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-04T09:00:00.000-06:00",
                  key: 1646406000000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-04T12:00:00.000-06:00",
                  key: 1646416800000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-04T15:00:00.000-06:00",
                  key: 1646427600000,
                  doc_count: 6
                }
              ]
            }
          },
          {
            key: "ES-Air",
            doc_count: 551,
            date: {
              buckets: [
                {
                  key_as_string: "2022-02-25T15:00:00.000-06:00",
                  key: 1645822800000,
                  doc_count: 2
                },
                {
                  key_as_string: "2022-02-25T18:00:00.000-06:00",
                  key: 1645833600000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-25T21:00:00.000-06:00",
                  key: 1645844400000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-26T00:00:00.000-06:00",
                  key: 1645855200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-26T03:00:00.000-06:00",
                  key: 1645866000000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-26T06:00:00.000-06:00",
                  key: 1645876800000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-02-26T09:00:00.000-06:00",
                  key: 1645887600000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-26T12:00:00.000-06:00",
                  key: 1645898400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-26T15:00:00.000-06:00",
                  key: 1645909200000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-26T18:00:00.000-06:00",
                  key: 1645920000000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-26T21:00:00.000-06:00",
                  key: 1645930800000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-02-27T00:00:00.000-06:00",
                  key: 1645941600000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-27T03:00:00.000-06:00",
                  key: 1645952400000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-27T06:00:00.000-06:00",
                  key: 1645963200000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-27T09:00:00.000-06:00",
                  key: 1645974000000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-27T12:00:00.000-06:00",
                  key: 1645984800000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-27T15:00:00.000-06:00",
                  key: 1645995600000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-02-27T18:00:00.000-06:00",
                  key: 1646006400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-27T21:00:00.000-06:00",
                  key: 1646017200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-28T00:00:00.000-06:00",
                  key: 1646028000000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-28T03:00:00.000-06:00",
                  key: 1646038800000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-28T06:00:00.000-06:00",
                  key: 1646049600000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-28T09:00:00.000-06:00",
                  key: 1646060400000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-02-28T12:00:00.000-06:00",
                  key: 1646071200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-28T15:00:00.000-06:00",
                  key: 1646082000000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-28T18:00:00.000-06:00",
                  key: 1646092800000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-02-28T21:00:00.000-06:00",
                  key: 1646103600000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-01T00:00:00.000-06:00",
                  key: 1646114400000,
                  doc_count: 16
                },
                {
                  key_as_string: "2022-03-01T03:00:00.000-06:00",
                  key: 1646125200000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-01T06:00:00.000-06:00",
                  key: 1646136000000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-03-01T09:00:00.000-06:00",
                  key: 1646146800000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-03-01T12:00:00.000-06:00",
                  key: 1646157600000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-01T15:00:00.000-06:00",
                  key: 1646168400000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-01T18:00:00.000-06:00",
                  key: 1646179200000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-03-01T21:00:00.000-06:00",
                  key: 1646190000000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-02T00:00:00.000-06:00",
                  key: 1646200800000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-03-02T03:00:00.000-06:00",
                  key: 1646211600000,
                  doc_count: 16
                },
                {
                  key_as_string: "2022-03-02T06:00:00.000-06:00",
                  key: 1646222400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-02T09:00:00.000-06:00",
                  key: 1646233200000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-02T12:00:00.000-06:00",
                  key: 1646244000000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-02T15:00:00.000-06:00",
                  key: 1646254800000,
                  doc_count: 17
                },
                {
                  key_as_string: "2022-03-02T18:00:00.000-06:00",
                  key: 1646265600000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-02T21:00:00.000-06:00",
                  key: 1646276400000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-03T00:00:00.000-06:00",
                  key: 1646287200000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-03T03:00:00.000-06:00",
                  key: 1646298000000,
                  doc_count: 14
                },
                {
                  key_as_string: "2022-03-03T06:00:00.000-06:00",
                  key: 1646308800000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-03-03T09:00:00.000-06:00",
                  key: 1646319600000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-03T12:00:00.000-06:00",
                  key: 1646330400000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-03T15:00:00.000-06:00",
                  key: 1646341200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-03T18:00:00.000-06:00",
                  key: 1646352000000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-03-03T21:00:00.000-06:00",
                  key: 1646362800000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-04T00:00:00.000-06:00",
                  key: 1646373600000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-04T03:00:00.000-06:00",
                  key: 1646384400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-04T06:00:00.000-06:00",
                  key: 1646395200000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-04T09:00:00.000-06:00",
                  key: 1646406000000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-04T12:00:00.000-06:00",
                  key: 1646416800000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-04T15:00:00.000-06:00",
                  key: 1646427600000,
                  doc_count: 7
                }
              ]
            }
          },
          {
            key: "JetBeats",
            doc_count: 539,
            date: {
              buckets: [
                {
                  key_as_string: "2022-02-25T15:00:00.000-06:00",
                  key: 1645822800000,
                  doc_count: 1
                },
                {
                  key_as_string: "2022-02-25T18:00:00.000-06:00",
                  key: 1645833600000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-25T21:00:00.000-06:00",
                  key: 1645844400000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-26T00:00:00.000-06:00",
                  key: 1645855200000,
                  doc_count: 17
                },
                {
                  key_as_string: "2022-02-26T03:00:00.000-06:00",
                  key: 1645866000000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-26T06:00:00.000-06:00",
                  key: 1645876800000,
                  doc_count: 6
                },
                {
                  key_as_string: "2022-02-26T09:00:00.000-06:00",
                  key: 1645887600000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-26T12:00:00.000-06:00",
                  key: 1645898400000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-26T15:00:00.000-06:00",
                  key: 1645909200000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-26T18:00:00.000-06:00",
                  key: 1645920000000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-26T21:00:00.000-06:00",
                  key: 1645930800000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-27T00:00:00.000-06:00",
                  key: 1645941600000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-27T03:00:00.000-06:00",
                  key: 1645952400000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-27T06:00:00.000-06:00",
                  key: 1645963200000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-02-27T09:00:00.000-06:00",
                  key: 1645974000000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-02-27T12:00:00.000-06:00",
                  key: 1645984800000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-02-27T15:00:00.000-06:00",
                  key: 1645995600000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-02-27T18:00:00.000-06:00",
                  key: 1646006400000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-27T21:00:00.000-06:00",
                  key: 1646017200000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-02-28T00:00:00.000-06:00",
                  key: 1646028000000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-02-28T03:00:00.000-06:00",
                  key: 1646038800000,
                  doc_count: 15
                },
                {
                  key_as_string: "2022-02-28T06:00:00.000-06:00",
                  key: 1646049600000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-02-28T09:00:00.000-06:00",
                  key: 1646060400000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-28T12:00:00.000-06:00",
                  key: 1646071200000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-02-28T15:00:00.000-06:00",
                  key: 1646082000000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-02-28T18:00:00.000-06:00",
                  key: 1646092800000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-02-28T21:00:00.000-06:00",
                  key: 1646103600000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-01T00:00:00.000-06:00",
                  key: 1646114400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-01T03:00:00.000-06:00",
                  key: 1646125200000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-01T06:00:00.000-06:00",
                  key: 1646136000000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-01T09:00:00.000-06:00",
                  key: 1646146800000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-01T12:00:00.000-06:00",
                  key: 1646157600000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-01T15:00:00.000-06:00",
                  key: 1646168400000,
                  doc_count: 16
                },
                {
                  key_as_string: "2022-03-01T18:00:00.000-06:00",
                  key: 1646179200000,
                  doc_count: 4
                },
                {
                  key_as_string: "2022-03-01T21:00:00.000-06:00",
                  key: 1646190000000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-02T00:00:00.000-06:00",
                  key: 1646200800000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-02T03:00:00.000-06:00",
                  key: 1646211600000,
                  doc_count: 7
                },
                {
                  key_as_string: "2022-03-02T06:00:00.000-06:00",
                  key: 1646222400000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-02T09:00:00.000-06:00",
                  key: 1646233200000,
                  doc_count: 10
                },
                {
                  key_as_string: "2022-03-02T12:00:00.000-06:00",
                  key: 1646244000000,
                  doc_count: 5
                },
                {
                  key_as_string: "2022-03-02T15:00:00.000-06:00",
                  key: 1646254800000,
                  doc_count: 17
                },
                {
                  key_as_string: "2022-03-02T18:00:00.000-06:00",
                  key: 1646265600000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-02T21:00:00.000-06:00",
                  key: 1646276400000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-03T00:00:00.000-06:00",
                  key: 1646287200000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-03T03:00:00.000-06:00",
                  key: 1646298000000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-03T06:00:00.000-06:00",
                  key: 1646308800000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-03T09:00:00.000-06:00",
                  key: 1646319600000,
                  doc_count: 3
                },
                {
                  key_as_string: "2022-03-03T12:00:00.000-06:00",
                  key: 1646330400000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-03T15:00:00.000-06:00",
                  key: 1646341200000,
                  doc_count: 8
                },
                {
                  key_as_string: "2022-03-03T18:00:00.000-06:00",
                  key: 1646352000000,
                  doc_count: 13
                },
                {
                  key_as_string: "2022-03-03T21:00:00.000-06:00",
                  key: 1646362800000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-04T00:00:00.000-06:00",
                  key: 1646373600000,
                  doc_count: 11
                },
                {
                  key_as_string: "2022-03-04T03:00:00.000-06:00",
                  key: 1646384400000,
                  doc_count: 9
                },
                {
                  key_as_string: "2022-03-04T06:00:00.000-06:00",
                  key: 1646395200000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-04T09:00:00.000-06:00",
                  key: 1646406000000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-04T12:00:00.000-06:00",
                  key: 1646416800000,
                  doc_count: 12
                },
                {
                  key_as_string: "2022-03-04T15:00:00.000-06:00",
                  key: 1646427600000,
                  doc_count: 7
                }
              ]
            }
          }
        ]
      }
    }
  }
  );
