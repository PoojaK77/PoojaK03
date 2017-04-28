/**
 * Kubernetes
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.6.3
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['io.kubernetes.js/ApiClient', 'io.kubernetes.js/io.kubernetes.js.models/V1beta1IDRange'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./V1beta1IDRange'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1beta1SupplementalGroupsStrategyOptions = factory(root.KubernetesJsClient.ApiClient, root.KubernetesJsClient.V1beta1IDRange);
  }
}(this, function(ApiClient, V1beta1IDRange) {
  'use strict';




  /**
   * The V1beta1SupplementalGroupsStrategyOptions model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1beta1SupplementalGroupsStrategyOptions
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1beta1SupplementalGroupsStrategyOptions</code>.
   * SupplementalGroupsStrategyOptions defines the strategy type and options used to create the strategy.
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1beta1SupplementalGroupsStrategyOptions
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>V1beta1SupplementalGroupsStrategyOptions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1SupplementalGroupsStrategyOptions} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1beta1SupplementalGroupsStrategyOptions} The populated <code>V1beta1SupplementalGroupsStrategyOptions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('ranges')) {
        obj['ranges'] = ApiClient.convertToType(data['ranges'], [V1beta1IDRange]);
      }
      if (data.hasOwnProperty('rule')) {
        obj['rule'] = ApiClient.convertToType(data['rule'], 'String');
      }
    }
    return obj;
  }

  /**
   * Ranges are the allowed ranges of supplemental groups.  If you would like to force a single supplemental group then supply a single range with the same start and end.
   * @member {Array.<module:io.kubernetes.js/io.kubernetes.js.models/V1beta1IDRange>} ranges
   */
  exports.prototype['ranges'] = undefined;
  /**
   * Rule is the strategy that will dictate what supplemental groups is used in the SecurityContext.
   * @member {String} rule
   */
  exports.prototype['rule'] = undefined;



  return exports;
}));

