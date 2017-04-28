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
    define(['io.kubernetes.js/ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.KubernetesJsClient) {
      root.KubernetesJsClient = {};
    }
    root.KubernetesJsClient.V1AttachedVolume = factory(root.KubernetesJsClient.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The V1AttachedVolume model module.
   * @module io.kubernetes.js/io.kubernetes.js.models/V1AttachedVolume
   * @version 1.0.0-snapshot
   */

  /**
   * Constructs a new <code>V1AttachedVolume</code>.
   * AttachedVolume describes a volume attached to a node
   * @alias module:io.kubernetes.js/io.kubernetes.js.models/V1AttachedVolume
   * @class
   * @param devicePath {String} DevicePath represents the device path where the volume should be available
   * @param name {String} Name of the attached volume
   */
  var exports = function(devicePath, name) {
    var _this = this;

    _this['devicePath'] = devicePath;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>V1AttachedVolume</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:io.kubernetes.js/io.kubernetes.js.models/V1AttachedVolume} obj Optional instance to populate.
   * @return {module:io.kubernetes.js/io.kubernetes.js.models/V1AttachedVolume} The populated <code>V1AttachedVolume</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('devicePath')) {
        obj['devicePath'] = ApiClient.convertToType(data['devicePath'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * DevicePath represents the device path where the volume should be available
   * @member {String} devicePath
   */
  exports.prototype['devicePath'] = undefined;
  /**
   * Name of the attached volume
   * @member {String} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));

