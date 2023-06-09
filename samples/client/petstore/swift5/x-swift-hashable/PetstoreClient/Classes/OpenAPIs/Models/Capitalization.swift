//
// Capitalization.swift
//
// Generated by openapi-generator
// https://openapi-generator.tech
//

import Foundation
#if canImport(AnyCodable)
import AnyCodable
#endif

public struct Capitalization: Codable, JSONEncodable {

    public var smallCamel: String?
    public var capitalCamel: String?
    public var smallSnake: String?
    public var capitalSnake: String?
    public var scaETHFlowPoints: String?
    /** Name of the pet  */
    public var ATT_NAME: String?

    public init(smallCamel: String? = nil, capitalCamel: String? = nil, smallSnake: String? = nil, capitalSnake: String? = nil, scaETHFlowPoints: String? = nil, ATT_NAME: String? = nil) {
        self.smallCamel = smallCamel
        self.capitalCamel = capitalCamel
        self.smallSnake = smallSnake
        self.capitalSnake = capitalSnake
        self.scaETHFlowPoints = scaETHFlowPoints
        self.ATT_NAME = ATT_NAME
    }

    public enum CodingKeys: String, CodingKey, CaseIterable {
        case smallCamel
        case capitalCamel = "CapitalCamel"
        case smallSnake = "small_Snake"
        case capitalSnake = "Capital_Snake"
        case scaETHFlowPoints = "SCA_ETH_Flow_Points"
        case ATT_NAME
    }

    // Encodable protocol methods

    public func encode(to encoder: Encoder) throws {
        var container = encoder.container(keyedBy: CodingKeys.self)
        try container.encodeIfPresent(smallCamel, forKey: .smallCamel)
        try container.encodeIfPresent(capitalCamel, forKey: .capitalCamel)
        try container.encodeIfPresent(smallSnake, forKey: .smallSnake)
        try container.encodeIfPresent(capitalSnake, forKey: .capitalSnake)
        try container.encodeIfPresent(scaETHFlowPoints, forKey: .scaETHFlowPoints)
        try container.encodeIfPresent(ATT_NAME, forKey: .ATT_NAME)
    }
}

